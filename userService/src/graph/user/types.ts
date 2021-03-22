import { ApolloServer, gql } from 'apollo-server';

export default gql`
extend type Query {

  users: [User]

  }

extend type Mutation {

createUser(firstName: String, lastName: String): User

}

  type User {
      firstName: String
      lastName: String
  }

`