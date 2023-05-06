import express from "express"
import { signin, signup } from "./auth.controller.js"
import { validation } from "../../middleware/validation.js"
import { signinSchema, userSchema } from "./auth.validation.js"

const authRouter= express.Router()


authRouter
.post('/signup',  validation(userSchema), signup)
.post('/signin',  validation(signinSchema), signin)



export default authRouter

