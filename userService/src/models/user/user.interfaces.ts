import { Types, Document, Model } from "mongoose";

export interface IUser {
  firstName: String;
  lastName: String;
}

export interface IUserDocument extends IUser, Document {}

export type IUserModel = Model<IUserDocument>;
