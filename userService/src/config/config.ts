import path from 'path';
import dotenv from 'dotenv';
import merge from 'lodash/merge';
import { ConnectionOptions } from 'mongoose';

dotenv.config({
    path: path.join(__dirname, '.env') // must be absolute
  });

const all = {
  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB_URI, // Default local uri
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
    // debug: process.env.MONGODB_DEBUG === 'true'
  } as ConnectionOptions,
}

// Extend and export the config base on NODE_ENV
// ====
export default {
    ...merge(
      all
    //   require(`./${process.env.NODE_ENV}`).default || {}
    )
  };