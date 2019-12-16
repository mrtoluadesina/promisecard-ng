import mongoose, { Document } from 'mongoose';

interface UserType extends Document {
  name: string;
  email: string;
}

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  password: { type: String },
});

export default mongoose.model<UserType>('User', UserSchema);
