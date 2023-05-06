import { userModel } from "../../../database/models/user.model.js"
import { confermEmail } from "../../emails/verifyEmail.html.js";
import { checkEmail } from "../../emails/user.email.js";
import { catchError } from "../../middleware/cachError.js"
import { ApiFeatures } from "../../utils/apifeature.js"
import { AppError } from "../../utils/AppErr.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";






const getAllUser= catchError(async (req, res, next)=>{
    let apiFeature= new ApiFeatures(userModel.find(), req.query).paginate().fields().filter().sort().search()
    let result= await apiFeature.mongooseQuery
    res.status(200).json({message: "success",page:apiFeature.page, result})
})
const getUser= catchError(async (req, res ,next)=>{
    const{id}= req.user
    let result= await userModel.findById(id)
    !result && next(new AppError("User not found "+req.originalUrl, 404))
    result && res.status(200).json({message: "success", result})
})
const updatePic= catchError(async (req, res ,next)=>{
    const{user}= req
    let result= await userModel.findByIdAndUpdate(user.id, {profilePic: req.file.filename}, {new: true} )
    !result && next(new AppError("User not found ", 404))
    result && res.status(200).json({message: "success", result})
})
const updateUser= catchError(async (req, res ,next)=>{
    const{user}= req
    let result= await userModel.findByIdAndUpdate(user.id, req.body, {new: true} )
    !result && next(new AppError("User not found ", 404))
    result && res.status(200).json({message: "success", result})
})
const deleteUser= catchError(async (req, res ,next)=>{
    const{user}= req
    let result= await userModel.findByIdAndDelete(user.id)
    !result && next(new AppError("User not found "+req.originalUrl, 404))
    result && res.status(200).json({message: "success", result})
})

const changeUserPassword= catchError(async (req, res ,next)=>{
    const{user}= req
    const {oldPassword, newPassword}= req.body
    let isPassword = await bcrypt.compare(oldPassword, user.password)
    if (isPassword) {
        bcrypt.hash( newPassword, 7 , async (err,hash)=> {
            await userModel.findByIdAndUpdate(user.id, {password: hash, passwordChangedAt: Date.now()},{ new: true })
        })
        let token = jwt.sign({name: user.name , userId: user._id, role: user.role},'examico2023teamproject')
        return res.status(200).json({message:"success",token})
    }
    next(new AppError("incorrect password", 400))
})

const verifyMail= catchError(async (req, res, next)=>{
    const{email,path}= req.body
    let isFound = await userModel.findOne({ email })
    if(isFound) return next(new AppError('acount already exist' , 409))
    checkEmail(email,confermEmail("email","",path,""))
    res.status(200).json({message:"email sended"})
})

const forgetPassword= catchError(async (req, res, next)=>{
        let checkNumber= Math.floor(Math.random() * 100000);
        const {email}= req.body
        let user = await userModel.findOneAndUpdate({ email },{checkNumber})
        !user && next(new AppError("User not found "+req.originalUrl, 404))
        checkEmail(email,confermEmail("password", `${user.name}`, "sss",checkNumber ))
        res.status(200).json({message:"email sended"})
    })

const verifyPass= catchError(async (req, res, next)=>{
    let {email}= req.params
    const {number,password}= req.body
    let user = await userModel.findOne({ email })
    !user && next(new AppError("User not found "+req.originalUrl, 404))
    if (user.checkNumber == number){ 
        bcrypt.hash( password, 7 , async (err,hash)=> {
            await userModel.updateOne({email},{password: hash, passwordChangedAt: Date.now()})
        })
        let token = jwt.sign({name: user.name , userId: user._id, role: user.role},'examico2023teamproject')
        return res.status(200).json({message:"success",token})
    }
    next(new AppError("incorrect number", 400))
})

export{
    getAllUser,
    getUser,
    updateUser,
    updatePic,
    deleteUser,
    changeUserPassword,
    verifyMail,
    forgetPassword,
    verifyPass

}


