import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { resolvers } from "./resolvers";
import { typeDefs } from "./models/typeDefs";
import mongoose from "mongoose";

const app = express();
const httpServer = http.createServer(app);

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log(`connection with mongo OK`);
  })
  .catch((err) => {
    console.log(err.message);
  });
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

(async () => {
  await server.start();
  app.use(
    "/",
    cors<cors.CorsRequest>(),
    bodyParser.json({ limit: "50mb" }),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: Number(process.env.PORT) || 4000 }, resolve)
  );
  console.log(`Server ready`);
})();
