import express from 'express'
import dotenv  from "dotenv"
import router from "./routers/api.js"

dotenv.config();

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server is running ")
})