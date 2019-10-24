import { prisma } from "../../../../prisma/generated/prisma-client";
import { generateToken } from "../../../../auth/jwt";
import {authenticateGoogle} from "../../../../auth/google"

export default {
  Mutation: {
    signUp: async (_, args,{ request, response }) => {

      request.body = {
        ...request.body,
        code:args.accessToken,
      };
      console.log(request.body)
      try {
        const { data, info } = await authenticateGoogle(request, response);
       console.log("data::",data,"info::",info)
       return "test:"+data;
      } catch (error) {
        console.log("구글 에러:",error)
      }
      return "JSON.stringify(data)";

      
      const { name, avatar, email, accessToken } = args;
      const exist = await prisma.$exists.user({
        OR: [{ name }, { email }]
      });

      if (exist) {
        await prisma.updateUser({
          where: {
            email: email
          },
          data: {
            accessToken
          }
        });
      } else {
        await prisma.createUser({
          name,
          avatar,
          email,
          accessToken,
          permission: process.env.ADMIN === email ? "ADMIN" : "USER"
        });
      }

      return generateToken(email);
    }
  }
};
