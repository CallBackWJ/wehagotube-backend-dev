import { prisma } from "../../../../prisma/generated/prisma-client";
import axios from "axios";
const URL = "https://www.googleapis.com/youtube/v3/liveBroadcasts";
export default {
  Mutation: {
    doPublish: async (_, { id, publish }, { request, isAuthenticated }) => {
      if (!isAuthenticated(request)) {
        return false;
      }

      const video = await prisma.videos({
        where: {
          schedule: {
            id
          }
        }
      });

      const schedule = await prisma.schedule({ id });


      if (video.length) {
        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + request.user.accessToken
        };
        const data = {
          id: video[0].youtubeId,
          snippet: {
            scheduledStartTime: schedule.startTime,
            scheduledEndTime:schedule.endTime,
            title: schedule.title,
            description:schedule.desc
          },
          status: {
            privacyStatus: publish ? "public" : "unlisted"
          },
          contentDetails: {
            enableContentEncryption: false,
            enableDvr: true,
            enableEmbed: true,
            recordFromStart: true,
            startWithSlate: false,
            monitorStream: {
              broadcastStreamDelayMs: 0,
              enableMonitorStream: false
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
          status: publish ? "PUBLISHED" : "COMPLETED"
        },
        where: {
          id
        }
      });
      return true;
    }
  }
};
