import { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import express = require("express");
import schema from "./graphql/schemasMap";

import db from "./db";

const api = async () => {
  //db connection
  await db();

  const app: Application = express();

  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is runnig at http://localhost:${PORT}`);
  });
};

api();
