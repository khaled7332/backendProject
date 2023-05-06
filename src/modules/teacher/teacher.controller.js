import { examModel } from "../../../database/models/exam.model.js"
import { catchError } from "../../middleware/cachError.js"
import { AppError } from "../../utils/AppErr.js"
import { ApiFeatures } from "../../utils/apifeature.js"






const createExam= catchError(async (req, res)=>{
    req.body.createdBY = req.user.id;
    delete req.body.testTaker;
    let result= new examModel(req.body)
    await result.save()
    res.status(200).json({message: "success", result})
})
const getAllExam= catchError(async (req, res)=>{
    const {user} = req
    let apiFeature= new ApiFeatures(examModel.find({createdBY: user.id}), req.query).paginate().fields().filter().sort().search()
    let result= await apiFeature.mongooseQuery
    .populate({
        path: 'testTaker',
        match: { user: req.user.id }, 
        select: { _id: 0, totalPoint: 1, answerDetail: 1 }, 
        populate: {
            path: 'user',
            select: { _id: 1, name: 1, email: 1} 
        }
    });
    res.status(200).json({message: "success",page:apiFeature.page, result})
})
// const getExam= catchError(async (req, res ,next)=>{
//     const{id}= req.params
//     let result= await examModel.findById(id)
//     !result && next(new AppError("Exam not found ", 404))
//     result && res.status(200).json({message: "success", result})
// })
const updateExam= catchError(async (req, res ,next)=>{
    const{examId}= req.params
    delete req.body.testTaker, req.body.createdBY ; 
    let result= await examModel.findByIdAndUpdate(examId, req.body, {new: true} )
    !result && next(new AppError("Exam not found ", 404))
    result && res.status(200).json({message: "success", result})
})
const deleteExam= catchError(async (req, res ,next)=>{
    const{examId}= req.params
    let result= await examModel.findByIdAndDelete(examId)
    !result && next(new AppError("Exam not found ", 404))
    result && res.status(200).json({message: "success", result})
})


export{
    createExam,
    getAllExam,
    // getExam,
    updateExam,
    deleteExam,

}
