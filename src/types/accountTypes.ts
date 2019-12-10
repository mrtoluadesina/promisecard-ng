import mongoose from 'mongoose';

export interface AccountType {
  accountName: string;
  accountBank: string;
  accountNumber: number;
  userId: mongoose.Types.ObjectId;
}

export interface CreateAccountReturnType {
  statusCode: number;
  message: string;
  payload?: any;
  error?: string;
}
