import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Mutation: {
    createTimeLink: async (_, { videoId, time, desc }) =>
      await prisma.createTimeLink({
        videoId,
        time,
        desc
      })
  }
};
