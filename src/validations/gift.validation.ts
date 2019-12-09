import { Joi } from 'celebrate';

export default {
  create: {
    title: Joi.string()
      .required()
      .error(new Error('Gift title is required')),
    briefDes: Joi.string(),
    promiseCardId: Joi.string()
      .required()
      .error(new Error('Promise card id is required')),
  },
};
