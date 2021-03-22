import mongoose from "mongoose";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server";
// import config from './config/config'

import schema from "./schema";

dotenv.config();

const server = new ApolloServer(schema);

mongoose.connect(
  `mongodb://fisayo:secret@${process.env.MONGO_ADDRESS}:27017/admin`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(`🚀  err at ${err}`);
    } else {
      // The `listen` method launches a web server.
      server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
      });
    }
  }
);
