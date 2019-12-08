import Joi from '@hapi/joi';

export default {
  createUser: {
    name: Joi.string()
      .required()
      .error(new Error('name is required')),
  },
};
