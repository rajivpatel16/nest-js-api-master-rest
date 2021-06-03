const Joi = require('joi');


export const userSchema = Joi.object({
    name: Joi.string().required(),
    teacher_id: Joi.string().required()
})