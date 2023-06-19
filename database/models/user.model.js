import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema= mongoose.Schema({
    name: {
        type: String,
        required: [true, 'user name is required'],
        minLength: [1, 'too short user name'],
        trim: true
    },
    email: {
        type: String,
        unique: [true, 'email must be unique'],
        trim: true,
        minLength: 1,
        required: [true, 'user email is required']
    },
    phone: {
        type: Number,
        required: [true, 'phone number is required'],
    },
    age: {
        type: Number,
        required: [true, 'age is required'],
    },
    gender:{
        type: String,
        enum: ['male', 'female']
    },
    country: {
        type: String,
    },
    region: {
        type: String,
    },
    password: {
        type: String,
        minLength: [5,'password is week'],
        required: true,
    },
    passwordChangedAt:Date,
    profilePic: String, 
    checkNumber:{
        type: Number
    },
    role:{
        type: String,
        enum: ['teacher', 'student'],
        default: 'student'
    }   
},{ timestamps: true })


userSchema.pre('save', function (){
    console.log(this);
    this.password = bcrypt.hashSync(this.password, 7)
})
userSchema.post('init', function (doc){
    if (doc.profilePic!=undefined) {
        doc.profilePic= "https://examico.onrender.com/profileImages/"+ doc.profilePic
    }
})

// userSchema.post('findOne',  function (){
//     // console.log(this.model);
//     // console.log(this.getQuery()._id);
//     const docToUpdate= this.model.findOne({_id:this.getQuery()._id})
//     console.log(docToUpdate);


//     // if(this._update.password) this._update.password = bcrypt.hashSync(this._update.password, 7)

// })




export const userModel= mongoose.model("user",userSchema)





