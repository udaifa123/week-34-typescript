//🔹 Function Syntax
function add(a:number,b:number):number{
    return a+b
}
console.log(add(10,20))



//🔹 Function Types

let greet:(name:string)=>string
greet=(name)=>{
    return "Hello "+name
}
console.log(greet("Udaifa"))




//🔹 Optional Parameters

function greet1(name:string,age?:number){
    console.log(name,age)
}
greet1("Hasna")
greet1("Hasna",19)




//🔹 Default Parameters

function greet2(name:string = "Guest") {
    console.log("Hello",name)
}
greet2()
greet2("Rana")



//🔹 Rest Parameters

function sum(...nums:number[]):number{
    return nums.reduce((a,b)=>a+b,0)
}
console.log(sum(1,2,3,4))



//🔹 Union Types

let value:string | number
value="hello"
value=100
console.log(value)



//🔹 Intersection Types

type A = { name: string };
type B = { age: number };

type Person = A & B;

let user: Person = {
  name: "Udaifa",
  age: 21
};

console.log(user);




//🔹 Type Aliases

type User = {
    name:string
    age:number
}

let u1:User={
    name:"Shaniya",
    age:21
}
console.log(u1)




//🔹 Type Assertions

let value1: unknown = "hello";

let length1 = (value1 as string).length;

console.log(length1);




