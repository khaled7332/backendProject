import express from "express"
import { validation } from "../../middleware/validation.js"
import { allowedTo, protectedRouter } from "../auth/auth.controller.js"
import {examine,getAllMyExam, getExam} from "./student.controller.js"
import { examineSchema, getExamSchema } from "./student.validation.js"



const studentRouter= express.Router()

studentRouter
.route('/')
.get(protectedRouter, allowedTo('student'), getAllMyExam)
studentRouter   
.route('/exam/:examId')
.get(protectedRouter, allowedTo('student'),validation(getExamSchema), getExam)
.put(protectedRouter, allowedTo('student'),validation(examineSchema), examine)




export default studentRouter

