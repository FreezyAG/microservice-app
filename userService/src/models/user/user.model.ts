import mongoose from 'mongoose';

import {IUserDocument, IUserModel} from './user.interfaces'

const UserSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
    },
    {
      timestamps: true
    }
  );
  
  export default mongoose.model<IUserDocument, IUserModel>('User', UserSchema);