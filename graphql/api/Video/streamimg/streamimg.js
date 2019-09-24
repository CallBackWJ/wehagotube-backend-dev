const URL = `https://www.googleapis.com/youtube/v3/liveBroadcasts/transition?part=id,snippet,contentDetails`;
export default {
  Mutation: {
    streamimg: async (_, { id,status }, { request, isAuthenticated }) => {
        if(!isAuthenticated(request)){
            return false;
        }
  
        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + request.user.accessToken
        };
        const val = await axios({
            method: "post",
            headers,
            url:
              URL +
              "?id="+id+"&broadcastStatus="+status
          });
    

      return val.status===200;
    }
  }
};
