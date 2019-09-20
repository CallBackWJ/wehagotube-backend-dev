import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Mutation: {
    deleteSchedule: async (_, { id}) =>
      await prisma.updateSchedule({
        where: {
          id
        }
      })
  }
};
