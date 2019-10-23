import { prisma } from "../../../../prisma/generated/prisma-client";
import axios from "axios";
const URL = `https://www.googleapis.com/youtube/v3/liveBroadcasts`;
export default {
  Mutation: {
    createVideo: async (_, { schedule_id }, { request, isAuthenticated }) => {
      if (!isAuthenticated(request)) {
        console.log("인증 풀림");
        return false;
      }
      const schedule = await prisma.schedules({
        where: { id: schedule_id }
      });
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + request.user.accessToken
      };
      const data = {
        snippet: {
          scheduledStartTime: schedule[0].startTime,
          title: schedule[0].title,
          description: schedule[0].desc
        },
        status: {
          privacyStatus: "unlisted"
        },
        contentDetails: {
          monitorStream: {
            enableMonitorStream: false
          }
        }
      };

      let val = 0;
      try {
        val = await axios({
          method: "post",
          url:
            URL +
            "?part=id,snippet,status,contentDetails&fields=id,snippet,status,contentDetails",
          headers,
          data
        });
      } catch (e) {
        console.log("생성에러");
        return false;
      }

      try {
        await axios({
          method: "post",
          url:
            URL +
            "/bind?id=" +
            val.data.id +
            "&part=id&streamId=Gv__7R0LBq7FzM5UiXtBHQ1571114671676256",
          headers
        });
      } catch (e) {
        console.log("바인딩 에러");
        return false;
      }
      await prisma.createVideo({
        youtubeId: val.data.id,
        schedule: {
          connect: {
            id: schedule_id
          }
        }
      });
      await prisma.updateSchedule({
        where: { id: schedule_id },
        data: { status: "READY" }
      });
     
      return  true;
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
