let userName: string = "Udaifa";
console.log(userName);

/////////////////////////////////////////////
//number type examples:
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float: number = 3.14

console.log(decimal)
console.log(hex)
console.log(binary)
console.log(octal)
console.log(float)


// String type examples
let color: string = "blue"
let fullName:string = "Udaifa"
let age1:number = 20
let sentence:string = `Hello,my name is ${fullName} and I 'll be ${age1+1} next year.`;

console.log(color)
console.log(fullName)
console.log(age1)
console.log(sentence)




//Template Literals (Backticks)
let userName1: string = "Udaifa";
let age2: number = 20

let result: string= `My name is ${userName1} and I am $ {age2} years old`
console.log(result)



/////
let firstName1: string = "Udaifa"
let lastName: string = "K K"

let fullName1:string  = `${firstName1} ${lastName}`

console.log("First Name:",firstName1)
console.log("Last Name:",lastName)
console.log("Full Name",fullName1)





// Boolean type examples
let isActive: boolean = true;
let hasPermission = false

console.log(isActive)
console.log(hasPermission)



//🔹 Used for Conditions

let isLoggedIn: boolean = true

if(isLoggedIn) {
    console.log("User logged in")
}else{
    console.log("User not logged in")
}




//Used for Flags / Toggles

let isDarkMode: boolean =false
isDarkMode = true



//🔹 Real Example

let hasPermission1: boolean = false

if(!hasPermission1) {
    console.log("Access Denied")
}




//🔹 Full Example Code

let isStudent: boolean =true
let isPassed: boolean = false

console.log("Is Student:",isStudent)
console.log("Is Passed:",isPassed)

if(isStudent) {
    console.log("Welcome student!")
}

if(!isPassed) {
    console.log("Try again")
}




//null
let z: null = null
console.log(typeof z)



//🔹 Full Example Code

let userName2:string | null = null

console.log(userName2)

userName2 = "Udaifa"

console.log(userName2)


//undefined
let y:undefined = undefined
console.log(typeof y)




//🔹 Function Example

function printName(name?: string){
    console.log(name)
}
printName()



//🔹 Full Example Code

let userName3:string | undefined

console.log(userName3)

userName3 = "Udaifa"

console.log(userName3)



//any

let data:any = 10;

data="Hello"
data=true
console.log(data)


//Function Example

function printValue(value:any) {
    console.log(value)
}

printValue(10)
printValue("Udaifa")
printValue(true)


//. Array Example

let arr:any[]= [10,"hello",true]
console.log(arr)


//Object Example

let user: any = {
    name:"udaifa",
    age:21
}
user="changed"



//🔴  Dangerous Example (Important ❗)

// let value:any = 10
// console.log(value.toUpperCase()) //❌runtime error 
//TypeScript shows no error,but it crashes when you run it



//unknown

//🔴can't use it directly ❌
// let value: unknown ="hello"
// console.log(value.toUpperCase()) //❌Error
//typeecript parayum type ariyilla


//✅ Correct Way (Type Check )
let value: unknown = "hello"
if(typeof value === "string"){
    console.log(value.toUpperCase())
}
//first check
//next use


//🔹 Another Example
let data1: unknown = 10

if(typeof data1 === "number") {
    console.log(data1+5)
}


//🔹 Full Example Code
let input:unknown = "Udaifa"

if(typeof input === "string") {
    console.log(input.toUpperCase())
}else{
    console.log("Not a string")
}



//never
//🔹 1. Working Example (Error throw)
// function throwError(): never {
//   throw new Error("Something went wrong");
// }

// throwError();
// function call cheyyumbol
// immediately error throw cheyyum
// return onnum illa ❌

//  so return type = never



//🔹  Working Example (Infinite loop)
// function infiniteLoop(): never {
//   while (true) {
//     console.log("Running...");
//   }
// }

// infiniteLoop();
//  explanation:

// loop stop aavilla
// function complete aavilla
//  so never



//3. Real Working Example (Important )
function processValue(value: string | number) {
    if(typeof value === "string") {
        console.log("String:",value)
    }else if(typeof value === "number") {
        console.log("Number:",value)
    }else {
        const check: never = value
        console.log(check)
    }
}

processValue("hello")
processValue(10)
// value always string OR number
// so else block orikkalum run aavilla
// ath kond never



//🔹 1. Type Inference
let age = 21
let name1="udaifa"

age=age+5

console.log("Age:",age)
console.log("Name:",name1)


//🔹 2. Type Annotation
let ages:21
let name2:string ="udaifa"

ages=age+5

console.log("Age:",ages)
console.log("Name:",name1)




//🔹 3. Function Example
function add(a:number,b:number):number{
    return a+b
}
let result1=add(10,20)
console.log("Result:",result1)





//Array
//🔹 1. Number Array
let nums: number[] = [1,2,3,4]
console.log(nums)


//🔹 2. String Array
let names: string[] = ["Udaifa","Ubaid","Unaisa"]
console.log(names)


//🔹 3. Add value
let nums1:number[] = [1,2]
nums1.push(3)
console.log(nums1)


//🔹 4. Access value
let nums2:number[] = [10,20,30]
console.log(nums2[0])
console.log(nums2[1])


//🔹 5. Loop
let nums3:number[] = [1,2,3]

nums3.forEach((n)=>{
    console.log(n)
})





//Tuples
//🔹 1. Basic Example
let user1: [string,number] = ["Udaifa",21]
console.log(user1)


//🔹 2. Access Values
let user0: [string, number] = ["Unaisa", 21];

console.log(user0[0]); // Udaifa
console.log(user0[1]); // 21


//🔹 Real Example (API style)
let response:[number,string]=[200,"Success"]

console.log("Status:",response[0])
console.log("Message:",response[1])



//🔹 Tuple with Different Types
let data3: [string,number,boolean]=["Test",100,true]
console.log(data3)



//Working Full Example
let student:[string,number]=["Udaifa",19]

console.log("Name:",student[0])
console.log("Age:",student[1])


//Objects
//🔹 1. Basic Example
let user2: { name: string; age: number } = {
  name: "Udaifa",
  age: 21
};

console.log(user2);


//🔹 2. Access Values
console.log(user2.name)
console.log(user2.age)



//🔹  Function with Object
function printUser(user:{name:string;age:number}){
    console.log(user.name,user.age)
}
printUser({name:"Udaifa",age:19})


