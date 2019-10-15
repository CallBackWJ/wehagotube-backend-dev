import { prisma } from "../../../../prisma/generated/prisma-client";
import axios from "axios";
const URL = "https://www.googleapis.com/youtube/v3/liveBroadcasts/transition";

export default {
  Mutation: {
    streamimg: async (
      _,
      { schedule_id, youtube_id, status },
      { request, isAuthenticated }
    ) => {
      if (!isAuthenticated(request)) {
        return false;
      }

      if (status === "PUBLISHED") {
        await prisma.updateSchedule({
          where: { id: schedule_id },
          data: { status: status }
        });
        return true;
      }
      if (status === "UNPUBLISHED") {
        await prisma.updateSchedule({
          where: { id: schedule_id },
          data: { status: "COMPLETED" }
        });
        return true;
      }

      const broadcastStatus = status === "LIVE" ? "live" : "complete";

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + request.user.accessToken
      };
      let val = false;
      if (status === "TEST") {
        //return true;
        await axios({
          method: "post",
          headers,
          url:
            URL +
            "?id=" +
            youtube_id +
            "&broadcastStatus=testing&part=id,snippet"
        });
        return true;
      }

      if (status === "DELETE") {
        await axios({
          method: "delete",
          headers,
          url:
            "https://www.googleapis.com/youtube/v3/liveBroadcasts?id=" +
            youtube_id
        });
        await prisma.updateSchedule({
          where: { id: schedule_id },
          data: { status: "RESERVED" }
        });
        await prisma.deleteVideo({youtubeId:youtube_id})
        console.log("삭제");
        return true;
      }
      val = await axios({
        method: "post",
        headers,
        url:
          URL +
          "?id=" +
          youtube_id +
          "&broadcastStatus=" +
          broadcastStatus +
          "&part=id,snippet"
      });

      console.log("val.status::", val.status);
      console.log("data::", val);
      if (val.status === 200) {
        await prisma.updateSchedule({
          where: { id: schedule_id },
          data: { status: status }
        });
      }

      return val.status === 200;
    }
  }
};
