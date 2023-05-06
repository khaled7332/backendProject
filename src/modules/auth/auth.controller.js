import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { userModel } from "../../../database/models/user.model.js"
import { AppError } from "../../utils/AppErr.js"
import { catchError } from "../../middleware/cachError.js"




export const signup= catchError(async (req, res ,next)=>{
    // let isFound = await userModel.findOne({ email: req.body.email })
    // if(isFound) return next(new AppError('acount already exist' , 409))
    let user= new userModel(req.body)
    await user.save()
    res.status(200).json({message: "success", user})
})
export const signin= catchError(async (req, res ,next)=>{
    const { email, password} = req.body
    let isFound = await userModel.findOne({email})
    if(isFound && (await bcrypt.compare(password, isFound.password))) {
        let token = jwt.sign({name: isFound.name , userId: isFound._id, role: isFound.role},'examico2023teamproject')
        return res.status(200).json({message: "success", token})
    }
    next(new AppError('incorrect email or password' , 401))
    
})

export const protectedRouter = catchError(async (req, res ,next)=>{

    let{token}= req.headers
    if(!token) return next(new AppError('token not provided',401))

    let decoded = jwt.verify(token, 'examico2023teamproject')
    
    let user = await userModel.findById(decoded.userId)
    if(!user) return next(new AppError('invalid token',401))

    if (user.passwordChangedAt){
        let changePasswordDate = parseInt(user.passwordChangedAt.getTime()/1000)
        if(changePasswordDate>decoded.iat) return next(new AppError('invalid token',401))
    }
    
    req.user = user
    next()

})


export const allowedTo = (...roles )=>{

    return catchError(async (req,res, next)=>{

        if(!roles.includes(req.user.role))
            return next(new AppError('not allow access this route ', 401))
        next()
    })
}
