// import path from 'path';
// import dotenv from 'dotenv';

// dotenv.config({
//   path: path.join(__dirname, '.env'),
// });

const all = {
  postgress: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    databaseName: process.env.POSTGRES_DB,
  },
  typeOrm: {},
};

export default all;
