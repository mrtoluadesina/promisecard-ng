import mongoose from 'mongoose';
import { GiftObjectType } from './giftTypes';

export interface PromiseObjType {
  title: string;
  userId?: mongoose.Types.ObjectId;
  gifts: [GiftObjectType];
  link: string;
  isDeleted?: boolean;
}

export interface CreatePromiseReturnType {
  status: number;
  message: string;
  error?: string;
  payload?: { promiseCard: object; gifts: object };
}
