import { Joi } from 'celebrate';

export default {
  createUser: {
    name: Joi.string()
      .required()
      .error(new Error('name is required')),
    email: Joi.string()
      .email()
      .required()
      .error(new Error('email is required or does not meet required format')),
    phone: Joi.string().error(new Error('phone number is required')),
  },
};
