import { prisma } from "../../../../prisma/generated/prisma-client";
import { generateToken } from "../../../../auth/jwt";
import axios from "axios"

export default {
  Mutation: {
    signUp: async (_, args, { request, response }) => {
      const tokens=await axios({
        url: 'https://www.googleapis.com/oauth2/v4/token',
        method: 'post',
        params: {
          code: args.code,
          client_id: "582721858124-msmrbfu9hs073da415js0l60jg5e8ej3.apps.googleusercontent.com",
          client_secret: "_ghW7KRIeNYDwpUu-WIU4Pah",
          redirect_uri: "http://localhost:3000",
          grant_type: 'authorization_code',
        }
      })
      .then((response) => {
        console.log(response.data);
        return response.data
      })
      .catch(function(err) {
        console.log("error:",err.response.data);
        return err.response.data
      });

      const user=await axios({
        url: 'https://www.googleapis.com/oauth2/v1/userinfo',
        method: 'get',
        params: {
          access_token: tokens.access_token,
        }
      })
      .then((response) => {
        console.log(response.data);
        return response.data
      })
      .catch(function(err) {
        console.log("error:",err.response.data);
        return err.response.data
      });


      const exist = await prisma.$exists.user({
        OR: [{ email:user.email }]
      });

      if (exist) {
        await prisma.updateUser({
          where: {
            email: user.email
          },
          data:tokens.refresh_token?{
            accessToken:tokens.access_token,
            refreshToken:tokens.refresh_token
          }:{
            accessToken:tokens.access_token,
          }
        });
      } else {
        await prisma.createUser({
          name:user.name,
          avatar:user.picture,
          email:user.email,
          accessToken:tokens.access_token,
          refreshToken:tokens.refresh_token,
          permission: process.env.ADMIN === email ? "ADMIN" : "USER"
        });
      }




     
      return generateToken(user.email)
      
      // const data2=axios({
      //   url: 'https://www.googleapis.com/oauth2/v4/token',
      //   method: 'post',
      //   params: {
      //     client_id: "582721858124-msmrbfu9hs073da415js0l60jg5e8ej3.apps.googleusercontent.com",
      //     client_secret: "_ghW7KRIeNYDwpUu-WIU4Pah",
      //     refresh_token: data1,
      //     grant_type: 'refresh_token',
      //   }
      // })
      // .then((response) => {
      //   console.log(response.data);
      //   return response.data.access_token
      // })
      // .catch(function(err) {
      //   console.log("error:",err.response.data);
      //   return err.response.data
      // });
     
    }
  }
};
