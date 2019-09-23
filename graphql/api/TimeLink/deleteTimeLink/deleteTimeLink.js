import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Mutation: {
    deleteTimeLink: async (_, { id }) =>
      await prisma.deleteTimeLink({
        id
      })
  }
};
