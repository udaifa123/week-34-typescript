//🔹 1. Enums

enum Role{
    Admin,
    User,
    Guest
}

let userRole:Role = Role.User
console.log("Role:",userRole)




//🔹 2. Literal Types

let status1: "success" | "error"
status1 = "success"
console.log("Status:",status1)




//🔹 3. Discriminated Union

type Success = {type:"success";data:string}
type ErrorType = {type:"error";message:string}

type Response1 = Success | ErrorType

function handleResponse(res:Response1) {
    if(res.type === "success"){
        console.log("Data:",res.data)
    }else{
        console.log("Error:",res.message)
    }
}

handleResponse({type:"success",data:"Login Success"})
handleResponse({type:"error",message:"Invalid Login"})




//🔹 4. Interface

interface User{
    name:string
    age:number
}

let user:User={
    name:"Udaifa",
    age:19
}
console.log(user)




//🔹 5. Generics

function identity<T>(value:T):T{
    return value
}
console.log(identity<number>(100))
console.log(identity<string>("hello"))




//🔹 6. Generic Constraints

function printLength<T extends {length:number}>(item:T) {
    console.log("Length:",item.length)
}
printLength("hello")
printLength([1,2,3])




//🔹 7. Utility Types

type User1 = {
    name:string
    age:number
}

let u1: Partial<User1> = {
    name:"Unaisa"
}
console.log(u1)


//Readonly

type Product = {
    title: string
}

let p: Readonly<Product> = {
    title:"Shoes"
}
console.log(p)




//🔹 8. Custom Types

type Product1 = {
    title:string
    price:number
}

let item:Product1 = {
    title:"Bag",
    price:1500
}
console.log(item)



///////////////////////////////////////////////////////////////////

//✅ Deliverables
//✅ 1. Build Reusable Generic Utilities


function identity1<T>(value:T): T {
    return value
}

console.log(identity1<number>(100))
console.log(identity1<string>("hello"))




//Another Utility (Generic Array)

function getFirstElemnt<T>(arr: T[]): T {
    return arr[0]
}

console.log(getFirstElemnt<number>([1,2,3]))
console.log(getFirstElemnt<string>(["a","b","c"]))




//Generic with Constraint

function printLength1<T extends {length:number}>(item: T): void {
    console.log("Length:",item.length)
}

printLength1("hello")
printLength1([1,2,3])



