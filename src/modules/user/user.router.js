import express from "express"
import {  changeUserPassword, deleteUser, forgetPassword, getAllUser, getUser, updatePic, updateUser, verifyMail, verifyPass } from "./user.controller.js"
import { protectedRouter } from "../auth/auth.controller.js";
import { validation } from "../../middleware/validation.js";
import { changeUserPasswordSchema, forgetPasswordSchema, updateUserSchema, verifyMailSchema, verifyPassSchema } from "./user.validation.js";
import { uploadSingleFile } from "../../middleware/fileUpload.js";



const userRouter= express.Router();

userRouter.get('/verifyMail', validation(verifyMailSchema), verifyMail)
userRouter.put('/forgetPassword',validation(forgetPasswordSchema), forgetPassword)
userRouter.post('/verifypass/:email',validation(verifyPassSchema), verifyPass)

userRouter
.route('/')
.put(protectedRouter,validation(updateUserSchema), updateUser)
.post(protectedRouter, uploadSingleFile('profilePic','profileImages'), updatePic)
.get(protectedRouter,getUser)
.delete(protectedRouter,deleteUser)
.patch(protectedRouter,validation(changeUserPasswordSchema), changeUserPassword)

userRouter
.route('/all')
.get(getAllUser)


export default userRouter;