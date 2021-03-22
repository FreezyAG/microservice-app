import { gql } from 'apollo-server-express';

import userTypes from './graph/user/types';

const rootSchema = gql`
  schema {
    query: Query
    mutation: Mutation
    # subscription: Subscription
  }

  type Query

  type Mutation

  # type Subscription

`

const typeDefs = [
    rootSchema,
    userTypes
]

export default typeDefs;