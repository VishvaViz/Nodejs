const { table } = require('console')
const { json } = require('express')
const fs =require('fs')
// let a={
//     name:'',
//     num:'',
//     address:'',
//     age:''

// }
// function obj(name,num,address,age){
//     a.name=name
//     a.num=num
//     a.address=address
//     a.age=age
// }
// obj('aaa',123,'bbb',23)
// fs.appendFileSync("data.json",JSON.stringify({a}),"utf-8")
// console.log("writen");
let obj={
    table:[]

}
let v=fs.readFileSync("data.json","utf-8")

let a={
    name:'vishva',
}
obj.table.push(a)

// let c=fs.appendFileSync("data.json",JSON.stringify(obj))
let w=fs.readFileSync("data.json","utf-8")
let e=JSON.parse(w)
e.table[0].name="krithiv"
fs.writeFileSync("data.json",JSON.stringify(e))

// console.log(e);
console.log("wrriten");
