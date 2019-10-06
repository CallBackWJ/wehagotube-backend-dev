import { prisma } from "../../../prisma/generated/prisma-client";

export default {
  Video: {
    schedule: async({ id }) => await prisma.video({ id }).schedule(),
    chats: async({ id }) =>await prisma.video({ id }).chats(),
    timeLinks:async({ id }) =>await prisma.video({ id }).timeLinks(),
  }
};