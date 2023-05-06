import nodemailer from "nodemailer";


export const checkEmail= async (email,content)=>{
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user: "zizoa7332@gmail.com",
            pass: "hdnzkhldxsghxdqr", // generated ethereal password
        },
    });
    
    let info = await transporter.sendMail({
        from: '"website" <zizoa7332@gmail.com>', // sender address
        to: email , // list of receivers
        subject: "Hello ✔", 
        html: content , // html body
    });
}
