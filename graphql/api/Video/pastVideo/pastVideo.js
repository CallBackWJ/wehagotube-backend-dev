
import {prisma} from "../../../../prisma/generated/prisma-client"
export default {
    Query:{
        pastVideo:async(_,{page})=>
        await prisma.videos({where:{
            schedule:{
                status:"PUBLISHED"
            }
        },
        orderBy:"createdAt_DESC",
        first:(page+1)*3
    })
    }
}