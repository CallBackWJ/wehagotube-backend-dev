import { prisma } from "../../../../prisma/generated/prisma-client";
import { generateToken } from "../../../../auth/jwt";
import axios from "axios";

export default {
  Mutation: {
    signUp: async (_, args, { request, response }) => {
     
      const val = await axios
        .post("https://oauth2.googleapis.com/token", {
          headers: { "Content-type": "application/x-www-form-urlencoded" },
          code:args.accessToken,
          client_id: "582721858124-msmrbfu9hs073da415js0l60jg5e8ej3.apps.googleusercontent.com",
          client_secret: "_ghW7KRIeNYDwpUu-WIU4Pah",
          redirect_uri:"http://localhost:4000",
          grant_type:"authorization_code"
        })
        .then(response => {
          console.log("response", JSON.stringify(response, null, 2));
        })
        .catch(error => {
          console.log("failed", error);
        });


        console.log(val)

      return val;
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
