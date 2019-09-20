import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Mutation: {
    createSchedule: async (_, { title, desc, startTime, thumbnail }) =>
      await prisma.createSchedule({
          title,
          desc,
          startTime,
          thumbnail
      })
  }
};
