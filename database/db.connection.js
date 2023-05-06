import mongoose from "mongoose"



export const connction = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/examico').then(()=>{
        console.log("every thing is ok 🫡");
    }).catch((err)=>{
        console.log("not cool  😢😢",err);
    })
}