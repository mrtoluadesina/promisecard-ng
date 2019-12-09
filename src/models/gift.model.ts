import mongoose, { Document } from 'mongoose';

interface GiftType extends Document {
  title: string;
  briefDes: string;
  promiseCardId: mongoose.Types.ObjectId;
}

const GiftSchema = new mongoose.Schema({
  title: { type: String, required: true },
  briefDes: { type: String },
  promiseCardId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Promisecard',
  },
});

export default mongoose.model<GiftType>('Gift', GiftSchema);
