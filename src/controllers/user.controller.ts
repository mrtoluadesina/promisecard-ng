import User from '../models/user.model';
import { UserType } from '../types/userTypes';

export async function create(user: UserType) {
  const exist = await User.findOne({ email: user.email });

  if (exist) {
    return { statusCode: 401, message: 'Email already in use' };
  }

  const newUser = new User(user);
  const payload = await newUser.save();

  return { statusCode: 201, message: 'Account successfully created', payload };
}
