import * as UserService from './services'
import {IUser} from '../../models/user/user.interfaces'

export default class UserProcessor {
     /* Queries */
     static async users(): Promise<IUser[]> {
         return UserService.users()
     }

     static async createUser(args: IUser): Promise<IUser> {
        console.log('args', args)
        return UserService.createUser(args)
    }
}