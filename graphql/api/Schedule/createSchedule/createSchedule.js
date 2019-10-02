import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Mutation: {
    createSchedule: async (_, { title, desc, startTime,endTime}) =>{
      
     return await prisma.createSchedule({
          title,
          desc,
          startTime,
          endTime
      })
    }
  }
};
