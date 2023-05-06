import Joi from "joi";

const createExamSchema = Joi.object({
    duration: Joi.number().required(),
    title: Joi.string().min(2).required(),
    description: Joi.string().min(5).max(300),
    question: Joi.array().items(
        Joi.object({
            NumberOfquestion: Joi.number().min(1).required(),
            question: Joi.string().min(1).required(),
            point: Joi.number().min(1).required(),
            correctAnswer: Joi.string().min(1).required(),
        })
    ).required(),
});

  // Define a Joi schema for the `updateExam` endpoint
const updateExamSchema = Joi.object({
    duration: Joi.number(),
    title: Joi.string().min(2),
    description: Joi.string().min(5).max(300),
    question: Joi.array().items(
        Joi.object({
            NumberOfquestion: Joi.number().min(1),
            question: Joi.string().min(1),
            point: Joi.number().min(1),
            correctAnswer: Joi.string().min(1),
        })
    ).required(),
    examId: Joi.string().required()
});

  // Define a Joi schema for the `deleteExam` endpoint
const deleteExamSchema = Joi.object({
    examId: Joi.string().required(),
});



export {
    createExamSchema,
    updateExamSchema,
    deleteExamSchema
};