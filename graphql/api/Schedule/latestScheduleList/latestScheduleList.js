import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Query: {
    latestScheduleList: async _ => {
      return await prisma.schedules({
        where: {
            startTime_gte: new Date().toISOString()
        },
        orderBy:"startTime_ASC",
        first:5
      });
    }
  }
};
