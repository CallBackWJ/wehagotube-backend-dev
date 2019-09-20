import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Mutation: {
    updateSchedule: async (_, { id, title, desc, startTime, thumbnail }) =>
      await prisma.updateSchedule({
        data: {
          title,
          desc,
          startTime,
          thumbnail
        },
        where: {
          id
        }
      })
  }
};
