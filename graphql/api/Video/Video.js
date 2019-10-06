import { prisma } from "../../../prisma/generated/prisma-client";

export default {
  Video: {
    schedule: ({ id }) =>  prisma.video({ id }).schedule(),
    chats: ({ id }) => prisma.video({ id }).chats(),
    timeLinks:({ id }) => prisma.video({ id }).timeLinks(),
  }
};