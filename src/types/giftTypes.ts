import mongoose from 'mongoose';

export interface GiftObjectType {
  title: string;
  briefDes?: string;
  userId?: mongoose.Types.ObjectId;
  promiseCardId: mongoose.Types.ObjectId;
}
