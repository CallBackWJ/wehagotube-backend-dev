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
      if(!val[0]) return null;
      return await prisma.updateVideo({where:{id:val[0].id},data:{viewCount:val[0].viewCount+1}})
    }
  }
};
