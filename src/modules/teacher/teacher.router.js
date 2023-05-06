import express from "express"
import { validation } from "../../middleware/validation.js"
import { allowedTo, protectedRouter } from "../auth/auth.controller.js"
import { createExam, deleteExam, getAllExam, updateExam } from "./teacher.controller.js"
import { createExamSchema, deleteExamSchema, updateExamSchema } from "./teacher.validation.js"



const teacherRouter= express.Router()

teacherRouter
.route('/') 
.get( protectedRouter, allowedTo('teacher'), getAllExam)
.post(protectedRouter, allowedTo('teacher'),validation(createExamSchema), createExam)
teacherRouter
.route('/exam/:examId') 
.put( protectedRouter, allowedTo('teacher'),validation(updateExamSchema), updateExam)
.delete( protectedRouter, allowedTo('teacher'),validation(deleteExamSchema), deleteExam)





export default teacherRouter

