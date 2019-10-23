import { prisma } from "../../../../prisma/generated/prisma-client";
import axios from "axios";
export default {
  Mutation: {
    deleteVideo: async (
      _,
      { schedule_id, youtube_id },
      { request, isAuthenticated }
    ) => {
      if (!isAuthenticated(request)) {
        return false;
      }
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + request.user.accessToken
      };

      try {
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
        await prisma.deleteVideo({ youtubeId: youtube_id });
      } catch (e) {
        console.log("삭제 실패");
        return false;
      }
      console.log("삭제 성공");
      return true;
    }
  }
};
