import { prisma } from "../../../../prisma/generated/prisma-client";
const URL = `https://www.googleapis.com/youtube/v3/liveBroadcasts`;
export default {
  Mutation: {
    createVideo: async (_, { schedule_id }, { request, isAuthenticated }) => {
      if(!isAuthenticated(request)){
          return false;
      }
      const schedule = await prisma.schedule({
        id: schedule_id
      });

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
          privacyStatus: "PRIVATE"
        }
      };

      const val1 = await axios({
        method: "post",
        url: URL + "?part=id,snippet,status&fields=id,snippet,status",
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
          "&part=id&streamId=NyYcimkxVcbqp9DUx57nog1569204542970828",
        headers
      });

      return await prisma.createVideo({
        videoId: val1.data.id,
        title: val1.data.snippet.title,
        desc: val1.data.snippet.description,
        status: "PRIVATE"
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
