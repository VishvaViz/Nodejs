const http=require('http')
const fs=require('fs')

// let sever=http.createServer((req,resp)=>{
//     resp.end("Sever is Started ")
// })
// sever.listen(8080,(err)=>{
//     if(err) throw err
//     console.log("server is ruining");
// })

let server=http.createServer((req,resp)=>{
    let url=req.url
    if(url=="/index"){
        resp.end("<h1>IndexPage</h1>")
    }
    else if(url=="/about"){
        resp.end("<h1>AboutPage</h1>")
    }

})
server.listen(8080,(err)=>{
    if (err) throw err
    console.log(`sever is ruining in ${8080}}`);
})