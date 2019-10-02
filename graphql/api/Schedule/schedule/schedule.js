import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Query: {
    schedule: async (_, { id}) => await prisma.schedule({id})
  }
};
