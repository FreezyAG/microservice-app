import merge from 'lodash/merge';
import userResolvers from './graph/user/resolvers';

const resolvers = merge(
    userResolvers
)

export default resolvers;