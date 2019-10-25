import { prisma } from "../../../../prisma/generated/prisma-client";
import axios from "axios";
const URL = "https://www.googleapis.com/youtube/v3/liveBroadcasts/transition";

export default {
  Mutation: {
    streaming: async (
      _,
      { schedule_id, youtube_id, status },
      { request, isAuthenticated }
    ) => {
      if (!isAuthenticated(request)) {
        return false;
      }

      const broadcastStatus = status === "LIVE" ? "live" : "complete";
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + request.user.accessToken
      };

      try {
        await axios({
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
        await prisma.updateSchedule({
          where: { id: schedule_id },
          data: { status: status }
        });
      } catch (e) {
        console.log("스트림 실패");
        console.log(e);
        return false;
      }
      return true;
    }
  }
};
