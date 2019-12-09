import mongoose, { Document } from 'mongoose';
import { hash } from 'bcrypt';

interface UserType extends Document {
  password: string;
}

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  password: { type: String, required: true },
});

UserSchema.pre<UserType>('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  hash(this.password, 12, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    return next();
  });
});

export default mongoose.model<UserType>('User', UserSchema);
