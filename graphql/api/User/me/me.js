import { prisma } from "../../../../prisma/generated/prisma-client";
import axios from "axios";
export default {
  Query: {
    me: async (_, __, { request, isAuthenticated }) => {
      if (isAuthenticated(request)) {
        const { user } = request;

        const newToken = await axios({
          url: "https://www.googleapis.com/oauth2/v4/token",
          method: "post",
          params: {
            client_id:
              "582721858124-msmrbfu9hs073da415js0l60jg5e8ej3.apps.googleusercontent.com",
            client_secret: "_ghW7KRIeNYDwpUu-WIU4Pah",
            refresh_token: user.refreshToken,
            grant_type: "refresh_token"
          }
        })
          .then(response => {
            console.log(response.data);
            return response.data.access_token;
          })
          .catch(function(err) {
            console.log("error:", err.response.data);
            return err.response.data;
          });

        return await prisma.updateUser({
          where: {
            id: user.id
          },
          data: {
            refreshToken: newToken
          }
        });
      } else {
        return await prisma.user({ id: "없음" });
      }
    }
  }
};
