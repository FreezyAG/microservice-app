
import UserProcessor from './processors'

export default {
    Query: {
        users: () => UserProcessor.users()
      },

    Mutation: {
      createUser: (_, args) => UserProcessor.createUser(args)
    }
}