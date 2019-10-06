import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Mutation: {
    createTimeLink: async (_, { videoId,seek, desc }) =>
      await prisma.createTimeLink({
        seek,
        desc,
        video:{
          connect:{
            id:videoId
          }
        }
      })
  }
};
