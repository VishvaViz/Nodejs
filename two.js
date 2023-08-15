const obj1={
   name:'Kratos',city:'NY',country:'America' 
}
const {country,city}=obj1
const obj2={
    name:{fname:'John',lname:'Wick'},city:'Toronto'
}
const {fname,lname}=obj2.name
// console.log(fname,lname);
const obj3={
    person1:{name:'No One',address:{city:'Bravos',sologan:'ValarMorghulis'}},
    person2:{name:'Spartan',address:{city:'SpartanCity',sologan:'Ahooo'}}
}
const {sologan}=obj3.person1.address
// console.log(sologan);
const obj4={
    elements:{water:'Sea',earth:'Rock',air:'Oxygen'}

}
const {elements:{water:bbb}}=obj4
console.log(bbb);
const arr=[1,'c',8]
let [a,,,]=arr
// console.log(a);
const arr1=['a','b','c','d','e']
let [,,,v]=arr1
// console.log(v);
const arr2=[['Targareyan'],['Starks'],['Greyoy'],['Arryn']]
let [[t],[s]]=arr2
// console.log(t,s);
const arr3=[{name:'celin'},{name:'george'}]
let [q,w]=arr3
let [name]=arr3
// console.log(q.name);
