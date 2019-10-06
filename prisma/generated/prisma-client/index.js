"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "TYPE",
    embedded: false
  },
  {
    name: "Schedule",
    embedded: false
  },
  {
    name: "Status",
    embedded: false
  },
  {
    name: "Video",
    embedded: false
  },
  {
    name: "TimeLink",
    embedded: false
  },
  {
    name: "Chat",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://wehagotube-dev-ba89fc6dcd.herokuapp.com/wehagotube-db-server/dev`
});
exports.prisma = new exports.Prisma();
