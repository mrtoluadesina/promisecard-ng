import { Joi } from 'celebrate';

export default {
  createAccount: {
    accountName: Joi.string()
      .required()
      .error(new Error('Account name is required')),
    accountBank: Joi.string()
      .required()
      .error(new Error('Account Bank is required')),
    accountNumber: Joi.string()
      .required()
      .error(new Error('Account number is required')),
    userId: Joi.string()
      .required()
      .error(new Error('User id is required')),
  },
};
