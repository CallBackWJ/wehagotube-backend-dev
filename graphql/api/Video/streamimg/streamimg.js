import { prisma } from "../../../../prisma/generated/prisma-client";
import axios from "axios";
const URL = "https://www.googleapis.com/youtube/v3/liveBroadcasts/transition";

export default {
  Mutation: {
    streamimg: async (_, {schedule_id, youtube_id,status }, { request, isAuthenticated }) => {
        if(!isAuthenticated(request)){
            return false;
        }
  

        if(status==="PUBLISHED"){
          await prisma.updateSchedule({where:{id:schedule_id},data:{status:status}})
          return true;
        }
        if(status==="UNPUBLISHED"){
          await prisma.updateSchedule({where:{id:schedule_id},data:{status:"COMPLETED"}})
          return true;
        }

        const broadcastStatus=status==="LIVE"?"live":"complete"


        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + request.user.accessToken
        };

        console.log("FFF",youtube_id,broadcastStatus);
        const val = await axios({
            method: "post",
            headers,
            url:
              URL +
              "?id="+youtube_id+"&broadcastStatus="+broadcastStatus+"&part=id,snippet"
          });

          console.log("val.status::",val.status)
          console.log("data::",val)
          if(val.status===200){
            await prisma.updateSchedule({where:{id:schedule_id},data:{status:status}})
          }
    
      return val.status===200;
    }
  }
};
