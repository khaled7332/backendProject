import express from "express"
import { connction } from "./database/db.connection.js"
import { routes } from "./src/modules/index.routs.js"


const app = express()
connction()

routes(app)

app.listen(3000, ()=>{
    console.log("server is running 👌👍");
})