import mongoose, { Document } from 'mongoose';

interface PromiseCardType extends Document {
  title: string;
  link: string;
  isActive: boolean;
}

const PromiseCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<PromiseCardType>('Promise', PromiseCardSchema);
