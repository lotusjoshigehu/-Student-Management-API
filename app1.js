//it is the main file
const express=require("express")
const app=express()
const db =require("./utils/dbconnection")
const studentroutes=require("./routes/studentroutes")

app.use(express.json())

app.use(studentroutes)

app.listen(3000,(err)=>
{
    console.log("server is running")
})
