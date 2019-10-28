import { prisma } from "../../../../prisma/generated/prisma-client";
export default {
  Mutation: {
    deleteSchedule: async (_, { id }) => {
      const tem = await prisma.schedule({ id });
      if (tem.status === "RESERVED") {
        await prisma.deleteSchedule({ id });
        console.log("삭제성공")
        return true;
      } else {
        console.log("삭제실패")
        return false;
      }
    }
  }
};
