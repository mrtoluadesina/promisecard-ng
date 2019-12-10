import Account from '../models/gift.model';
import User from '../models/user.model';
import { AccountType, CreateAccountReturnType } from '../types/accountTypes';

export async function createAccount(
  accountDetails: AccountType,
): Promise<CreateAccountReturnType> {
  try {
    const exist = await Account.findOne({
      accountNumer: accountDetails.accountName,
      userId: accountDetails.userId,
    });

    if (exist) {
      return { statusCode: 400, message: 'Login to your account' };
    }

    const userExist = await User.findById(accountDetails.userId);

    if (!userExist) {
      return { statusCode: 404, message: 'This user does not exist' };
    }

    const account = new Account(accountDetails);
    await account.save();
    return { statusCode: 200, message: 'success', payload: account };
  } catch (error) {
    return {
      statusCode: 500,
      message: 'Something went wrong. Please try again',
      error: error.message,
    };
  }
}
