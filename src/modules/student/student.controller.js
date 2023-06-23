import { examModel } from "../../../database/models/exam.model.js"
import { catchError } from "../../middleware/cachError.js"
import { AppError } from "../../utils/AppErr.js"
import { ApiFeatures } from "../../utils/apifeature.js"


const getExam= catchError(async (req, res ,next)=>{
    const{examId}= req.params
    let result= await examModel.findById(examId,{testTaker:0})
    !result && next(new AppError("Exam not found ", 404))
    result && res.status(200).json({message: "success", result})
})


const examine= catchError(async (req, res ,next)=>{
    const{examId}= req.params
    const {totalPoint, answerDetail } = req.body;
    const exam = await examModel.findById(examId); 
    !exam && next(new AppError("Exam not found ", 404))
    const testTaker = { user:req.user.id, totalPoint, answerDetail, answeredAt: Date.now() }; 
    exam.testTaker.push(testTaker); 
    await exam.save();
    exam && res.status(200).json({message: "success", exam})
})

const getAllMyExam= catchError(async (req, res ,next)=>{
    let apiFeature= new ApiFeatures(examModel.find({ testTaker: { $elemMatch: { user: req.user.id } } }), req.query).paginate().fields().filter().sort().search()
    let exams= await apiFeature.mongooseQuery
    .populate({
        path: 'createdBY',
        select: { _id: 1, name: 1 } 
    })
    .populate({
        path: 'testTaker',
        match: { user: req.user.id }, 
        select: { _id: 0, totalPoint: 1, answerDetail: 1 }, 
        populate: {
            path: 'user',
            select: { _id: 1, name: 1 } 
        }
    });
    !exams && next(new AppError("not found Exams ", 404))
    const results = exams.map(({ _id, createdBY, title, description, duration, testTaker,question }) => ({
        ExamId: _id,
        createdBY,
        title,
        description,
        duration,
        testTaker: testTaker.filter((taker) => taker.user._id == req.user.id),
        question
    }));
    res.status(200).json({message: "success",page:apiFeature.page, results})

});


export{
    examine, 
    getExam, 
    getAllMyExam

}
