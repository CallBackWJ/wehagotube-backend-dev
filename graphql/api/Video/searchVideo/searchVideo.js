import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Query: {
    searchVideo: async (_, { keyword }) =>
      await prisma.videos({
        where: {
          OR: [
            {
              schedule: {
                title_contains: keyword,
               
              }
            },
            { schedule: {
                desc_contains: keyword
              }
            },
            {
                timeLinks_some:{
                    desc_contains:keyword
                }
            }
          ],
          schedule:{
              status:"PUBLISHED"
          }
          
        },
        orderBy: "createdAt_ASC"
      })
  }
};
