var Joi = require('joi');

var schema = {
  name   : Joi.string().required(),
  roles  : Joi.array().items(Joi.string().valid('admin', 'moderator')),
  gender  : Joi.array().items(Joi.string().valid('male', 'female'))
};

var data = {
    name: 'asd',
    roles: ['admin', 'moderator'],
    gender: ['waste']
};

Joi.assert(data, schema);

