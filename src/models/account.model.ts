import { Schema, Document, Types, model } from 'mongoose';

interface AccountType extends Document {
  accountName: string;
  accountBank: string;
  accountNumber: number;
  userId: Types.ObjectId;
}

const AccountSchema = new Schema({
  accountName: { type: String, required: true },
  accountBank: { type: String, required: true },
  accountNumber: { type: Number, required: true },
  userId: { type: Types.ObjectId, required: true, ref: 'User' },
});

export default model<AccountType>('Account', AccountSchema);
