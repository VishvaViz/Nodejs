const express=require('express')
const fs=require('fs')
const app=express()
app.use(express.json())
const PORT=process.env.PORT || 3000
app.listen(PORT,(err)=>{
    if(err) throw err
    console.log("sever is listing on port ",PORT);
})
app.get("/data",(req,resp)=>{
    let file=fs.readFileSync("data.json","utf-8")
    const data=JSON.parse(file)
    resp.send(data)
})
