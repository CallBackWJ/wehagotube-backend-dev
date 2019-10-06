import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Query: {
    video: async (_, { schedule_id }) => {
      const val=await prisma.videos({
        where: {
          schedule: {
            id: schedule_id
          }
        }
      });
      
      return val[0]
    }
  }
};
