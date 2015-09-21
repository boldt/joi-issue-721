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

Joi.validate(data, schema, function (err, value) {
	console.log("Error", err);
	console.log("Value", value);
});
