import Joi from "joi";

export const userSchema = Joi.object({
    name: Joi.string().min(1).required(),
    email: Joi.string().email().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    phone: Joi.number().required(),
    age: Joi.number().required(),
    gender: Joi.string().valid('male', 'female'),
    country: Joi.string(),
    region: Joi.string(),
    password: Joi.string().min(5).required(),
    role: Joi.string().valid('teacher', 'student'),
});


export const signinSchema = Joi.object({
    email: Joi.string().email().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(5).required(),
});


