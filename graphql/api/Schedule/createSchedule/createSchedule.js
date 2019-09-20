import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Mutation: {
    createSchedule: async (_, { title, desc, start, end, thumbnail }) =>
      await prisma.createSchedule({
        title,
        desc,
        start,
        end,
        thumbnail
      })
  }
};
