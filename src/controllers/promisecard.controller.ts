import Promise from '../models/promisecard.model';
import Gift from '../models/gift.model';
import { GiftObjectType } from '../types/giftTypes';

import { PromiseObjType, CreatePromiseReturnType } from '../types/promisecard';

export async function createPromise(
  promise: PromiseObjType,
): Promise<CreatePromiseReturnType> {
  try {
    if (!promise) {
      return { status: 400, message: 'No payload sent' };
    }
    const { title, userId, gifts } = promise;

    let promiseCard = new Promise({ title, userId });

    let giftResponse: GiftObjectType[] = [];

    await gifts.forEach(async gift => {
      gift.userId = userId;
      gift.promiseCardId = promiseCard._id;

      let newGift = new Gift(gift);
      let response = await newGift.save();

      await giftResponse.push(response);
    });

    let promiseResponse = await promiseCard.save();

    const payload = {
      promiseCard: promiseResponse,
      gifts: giftResponse,
    } as any;

    return { status: 200, message: 'Success', payload };
  } catch (error) {
    return {
      status: 500,
      message: 'An error occurred. Please try again',
      error: error.message,
    };
  }
}
