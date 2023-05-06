import multer from "multer"
import { AppError } from "../utils/AppErr.js"


let option = (uploadFolder)=>{
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `uploads/${uploadFolder}`)
        },
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, uniqueSuffix + '-' + file.originalname)
        }
    })
    const fileFilter = function (req, file, cb) {
        if (file.mimetype.startsWith('image')) {
            cb(null, true)
        } else {
            cb(new AppError('images only',400), false)
        }
    }
    return multer({ storage: storage, fileFilter: fileFilter })
}
export const uploadSingleFile= (fieldName, uploadFolder)=> option(uploadFolder).single(fieldName)

