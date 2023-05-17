import express from "express"
import cors from "cors"
import { globalErrorMidelware } from "../middleware/globalError.js"
import { AppError } from "../utils/AppErr.js"
import authRouter from "./auth/auth.router.js"
import userRouter from "./user/user.router.js"
import studentRouter from "./student/student.router.js"
import teacherRouter from "./teacher/teacher.router.js"

export const routes = (app)=>{
    app.use(express.static('uploads'))
    app.use(express.json())
    app.use(cors({origin: 'http://localhost:4200'}))

    app.use('/examico/user',userRouter)
    app.use('/examico/auth',authRouter)
    app.use('/examico/student',studentRouter)
    app.use('/examico/teacher',teacherRouter)

    
    app.use("*",(req,res,next)=>{
        next(new AppError("invalid URL: "+req.originalUrl, 404))
    })
    app.use(globalErrorMidelware)

    process.on('unhandledRejection',(err)=>{
        console.log("error",err);
    })
    process.on('uncaughtException',(err)=>{
        console.log("error",err);
    })
}