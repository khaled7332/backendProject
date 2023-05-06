import Joi from 'joi';



// Define a Joi schema for the `updateUser` endpoint
const updateUserSchema = Joi.object({
    name: Joi.string().min(1).alphanum(),
    phone: Joi.number(),
    age: Joi.number(),
    gender: Joi.string().valid('male', 'female'),
    country: Joi.string(),
    region: Joi.string()
});

// Define a Joi schema for the `changeUserPassword` endpoint
const changeUserPasswordSchema = Joi.object({
    oldPassword: Joi.string().min(5).required(),
    newPassword: Joi.string().min(6).required(),
});

// Define a Joi schema for the `verifyMail` endpoint
const verifyMailSchema = Joi.object({
    email: Joi.string().email().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    path: Joi.string().required(),
});

// Define a Joi schema for the `forgetPassword` endpoint
const forgetPasswordSchema = Joi.object({
    email: Joi.string().email().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
});

// Define a Joi schema for the `verifyPass` endpoint
const verifyPassSchema = Joi.object({
    number: Joi.number().required(),
    password: Joi.string().min(6).required(),
});


export {
    updateUserSchema, 
    changeUserPasswordSchema, 
    verifyMailSchema, 
    verifyPassSchema, 
    forgetPasswordSchema
}