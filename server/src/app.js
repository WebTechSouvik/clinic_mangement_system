const express =require("express")















const app=express()

app.use(express.json())
app.use(express.urlencoded())


const userRouter=require("./routes/userRouter.js")

app.use(userRouter)




module.exports=app