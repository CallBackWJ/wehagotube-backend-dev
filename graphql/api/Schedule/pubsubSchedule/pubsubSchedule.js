import { prisma } from "../../../../prisma/generated/prisma-client";

export default {
  Subscription: {
    pubsubSchedule: {
      subscribe: (_, args) => {
        return prisma.$subscribe
          .schedule({
            mutation_in: ["CREATED","UPDATED"]
          })
          .node();
      },
      resolve: payload => {
         console.log(payload);
        if(payload.status==="READY"||payload.status==="PUBLISHED"){
        return payload;
        }
        return payload;
      }
    }
  }
};
