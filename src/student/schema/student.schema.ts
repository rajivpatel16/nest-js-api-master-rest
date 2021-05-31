const Joi = require('joi');


export const userSchema = Joi.object({
    name: Joi.string().required(),
    teacher: Joi.string().required()
})