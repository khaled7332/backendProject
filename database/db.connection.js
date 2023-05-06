import mongoose from "mongoose"



export const connction = ()=>{
    mongoose.connect('mongodb+srv://zizoa7332:naQRODpICFUNDC9O@cluster0.wwwk48t.mongodb.net/examico').then(()=>{
        console.log("every thing is ok 🫡");
    }).catch((err)=>{
        console.log("not cool  😢😢",err);
    })
}