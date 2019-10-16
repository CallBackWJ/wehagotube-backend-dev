import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Query: {
    latestScheduleList: async (_ ,{page})=> {
      return await prisma.schedules({
        where: {
            startTime_gte: new Date().toISOString()
        },
        orderBy:"startTime_ASC",
        skip:page*5,
        first:5
      });
    }
  }
};
