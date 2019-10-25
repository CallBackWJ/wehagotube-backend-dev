import './env'
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "../graphql/schema";
import {authenticateJwt,isAuthenticated} from "../auth/jwt"


const server = new GraphQLServer({
  schema,
  context:({request,response})=>({request,response,isAuthenticated})
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

const port = process.env.PORT || 4000;
server.start({ port }, () =>
  console.log(`✅ Server running on http://localhost:${port}`)
);

