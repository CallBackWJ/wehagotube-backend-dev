import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Query: {
    liveVideo: async (_, args) =>
      await prisma.videos({
        where: {
          OR: [
            {
              schedule: {
                status: "READY"
              }
            },
            {
              schedule: {
                status: "LIVE"
              }
            }
          ]
        }
      })
  }
};
