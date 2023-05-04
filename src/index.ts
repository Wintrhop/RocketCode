
import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./models/typeDefs.js";
import mongoose from "mongoose";

const server = new ApolloServer({ typeDefs, resolvers });

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log(`connection with mongo OK`);
  })
  .catch(err => {
    console.log(err.message);
  });
startStandaloneServer(server, {
  listen: { port: Number(process.env.PORT) || 4000},
}).then(() => {
  console.log(`Server ready`);
});