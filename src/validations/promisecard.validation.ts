import { Joi } from 'celebrate';

export default {
  createPromiseCard: {
    title: Joi.string()
      .required()
      .error(new Error('Promise card title is required')),
    link: Joi.string()
      .required()
      .error(new Error('Promise card link is required')),
  },
};
