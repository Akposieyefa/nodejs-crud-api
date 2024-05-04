import expresss from 'express'
import dotenv  from "dotenv"
import router from "./routers/api.js"

dotenv.config();

const app = expresss()

app.use(expresss.urlencoded({extended: false}))
app.use(expresss.json())

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server is running ")
})