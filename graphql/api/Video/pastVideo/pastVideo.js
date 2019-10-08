
import {prisma} from "../../../../prisma/generated/prisma-client"
export default {
    Query:{
        pastVideo:async(_,args)=>
        await prisma.videos({where:{
            schedule:{
                status:"PUBLISHED"
            }
        },
        orderBy:"createdAt_ASC"
    })
    }
}