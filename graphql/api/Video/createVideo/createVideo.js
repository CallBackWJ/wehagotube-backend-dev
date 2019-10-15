import { prisma } from "../../../../prisma/generated/prisma-client";
import axios from "axios";
const URL = `https://www.googleapis.com/youtube/v3/liveBroadcasts`;
export default {
  Mutation: {
    createVideo: async (_, { schedule_id }, { request, isAuthenticated }) => {
      if (!isAuthenticated(request)) {
        return false;
      }
      const schedule = await prisma.updateSchedule({
        where: { id: schedule_id },
        data: { status: "READY" }
      });

      console.log(schedule);
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + request.user.accessToken
      };
      const data = {
        snippet: {
          scheduledStartTime: schedule.startTime,
          title: schedule.title,
          description: schedule.desc
        },
        status: {
          privacyStatus: "unlisted"
        },
        contentDetails: {
           monitorStream: {
              enableMonitorStream: true 
            } 
          }
      };

      const val1 = await axios({
        method: "post",
        url: URL + "?part=id,snippet,status,contentDetails&fields=id,snippet,status,contentDetails",
        headers,
        data
      });

      console.log("create youtube video::", val1.data);
      const val2 = await axios({
        method: "post",
        url:
          URL +
          "/bind?id=" +
          val1.data.id +
          "&part=id&streamId=Gv__7R0LBq7FzM5UiXtBHQ1571114671676256",
        headers
      });

      console.log("bind youtube video::", val2.data);

      return await prisma.createVideo({
        youtubeId: val1.data.id,
        schedule: {
          connect: {
            id: schedule_id
          }
        }
      });
    }
  }
};

//   data: {
//     id: 'NEx1Oj9671k',
//     snippet: {
//       publishedAt: '2019-09-23T07:02:17.000Z',
//       channelId: 'UCNyYcimkxVcbqp9DUx57nog',
//       title: '테스트6',
//       description: '테스트',
//       thumbnails: [Object],
//       scheduledStartTime: '2019-10-02T12:33:00.000Z',
//       isDefaultBroadcast: false,
//       liveChatId: 'Cg0KC05FeDFPajk2NzFrKicKGFVDTnlZY2lta3hWY2JxcDlEVXg1N25vZxILTkV4MU9qOTY3MWs'
//     },
//     status: {
//       lifeCycleStatus: 'created',
//       privacyStatus: 'public',
//       recordingStatus: 'notRecording'
//     }
//   }
