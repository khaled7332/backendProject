import Joi from "joi";

// Define a Joi schema for the `examine` endpoin
const examineSchema = Joi.object({
    totalPoint: Joi.number().required(),
    answerDetail: Joi.array().items(Joi.object({
        NumberOfquestion: Joi.number().required(),
        answer: Joi.string().required(),
        point: Joi.number().required()
    })).required(),
    examId: Joi.string().hex().length(24).required()
});


// Define a Joi schema for the `getExam` endpoint
const getExamSchema = Joi.object({
    examId: Joi.string().hex().length(24).required(),
});

export {
    examineSchema,
    getExamSchema
};








