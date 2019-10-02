import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Query: {
    schedules: async (_, { type, keyword }) => {
      if (type === "all")
        return await prisma.schedules({
          where: {
            OR: [
              {
                title_contains: keyword
              },
              {
                desc_contains: keyword
              }
            ]
          }
        });
      else if (type === "title")
        return await prisma.schedules({ where: { title_contains: keyword } });
      else if (type === "desc")
        return await prisma.schedules({ where: { desc_contains: keyword } });
    }
  }
};
