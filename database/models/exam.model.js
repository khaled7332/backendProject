import mongoose from "mongoose";

const examSchema= mongoose.Schema({
    createdBY:{
        type:mongoose.Types.ObjectId,
        ref:'user',
        required: [true, 'user is required']
    },
    testTaker:[{
        answeredAt:Date,
        _id: false,
        user:{
            type:mongoose.Types.ObjectId,
            ref:'user',
            required: [true, 'user is required']
        },
        totalPoint:{
            type: Number,
            required: [true, 'question number is required'],
            min:1
        },
        answerDetail:[{
            _id: false,
            NumberOfquestion:{
                type: Number,
                required: [true, 'question number is required'],
                min:1
            },
            answer:{
                type: String
            },
            point:{
                type: Number,
                default:0
            }
        }]
    }],
    title:{
        type: String,
        required: [true, 'exam title is required'],
        minLength:[2,'too short exam name']
    },
    description:{
        type: String,
        minLength: [5, 'too short proudct description'],
        maxLenght: [300, 'too long proudct description']
    },
    duration: {
        type: Number,
        required: [true, 'duration is required'],
    },
    question:[{   
        _id: false,
        NumberOfquestion:{
            type: Number,
            required: [true, 'question number is required'],
            min:1
        },
        question:{
            type: String,
            trim: true,
            required: [true, 'question title is required'],
            minLength:[1,'too short question']
        },
        point:{
            type: Number,
            required: [true, 'point is required'],
            min:1
        },
        correctAnswer:{
            type: String,
            trim: true,
            required: [true, 'question title is required'],
            minLength:[1,'too short question']
        }
    }],
    
},{ timestamps: true })





export const examModel = mongoose.model("exam",examSchema)





