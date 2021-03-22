import User from '../../models/user/user.model'

import {IUser} from '../../models/user/user.interfaces'

export async function users(): Promise<IUser[]>  {
    return User.find({}).lean()
  }

export async function createUser({
    firstName,
    lastName
}: {
firstName: String,
lastName: String
}): Promise<IUser>  {
return User.create({
    firstName: firstName,
    lastName: lastName
})
}