
import {prisma} from "../../../../prisma/generated/prisma-client"
export default {
    Query:{
        videos:async(_,args)=>
        await prisma.videos()
    }
}