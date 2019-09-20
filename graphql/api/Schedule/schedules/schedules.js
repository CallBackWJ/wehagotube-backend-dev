import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Query: {
    schedules: async (_, args) => 
      await prisma.schedules({})
    
  }
};
