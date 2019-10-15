import { prisma } from "../../../../prisma/generated/prisma-client";
import axios from "axios";
const URL = "https://www.googleapis.com/youtube/v3/liveBroadcasts";
export default {
  Mutation: {
    updateSchedule: async (
      _,
      { id, title, desc, startTime, endTime, status },
      { request, isAuthenticated }
    ) => {
      if (!isAuthenticated(request)) {
        return false;
      }

      const video = await prisma.videos({
        where: {
          schedule: {
            id: id
          }
        }
      });

      if (video.length) {
        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + request.user.accessToken
        };
        const data = {
          id: video[0].youtubeId,
          snippet: {
            scheduledStartTime: startTime,
            scheduledEndTime: endTime,
            title: title,
            description: desc
          },
          status: {
            privacyStatus: status === "PUBLISHED" ? "public" : "unlisted"
          },
          contentDetails: {
            enableContentEncryption: false,
            enableDvr: true,
            enableEmbed: true,
            recordFromStart: true,
            startWithSlate: false,
            monitorStream: {
              broadcastStreamDelayMs: 0,
              enableMonitorStream: true
            }
          }
        };
        await axios({
          method: "PUT",
          url:
            URL +
            "?part=id,snippet,status,contentDetails&fields=id,snippet,status,contentDetails",
          headers,
          data
        });
      }

      await prisma.updateSchedule({
        data: {
          title,
          desc,
          startTime,
          endTime,
          status
        },
        where: {
          id
        }
      });
      return true;
    }
  }
};
