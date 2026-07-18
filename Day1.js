"use strict";
let userName = "Udaifa";
console.log(userName);
/////////////////////////////////////////////
//number type examples:
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let float = 3.14;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
console.log(float);
// String type examples
let color = "blue";
let fullName = "Udaifa";
let age1 = 20;
let sentence = `Hello,my name is ${fullName} and I 'll be ${age1 + 1} next year.`;
console.log(color);
console.log(fullName);
console.log(age1);
console.log(sentence);
//Template Literals (Backticks)
let userName1 = "Udaifa";
let age2 = 20;
let result = `My name is ${userName1} and I am $ {age2} years old`;
console.log(result);
/////
let firstName1 = "Udaifa";
let lastName = "K K";
let fullName1 = `${firstName1} ${lastName}`;
console.log("First Name:", firstName1);
console.log("Last Name:", lastName);
console.log("Full Name", fullName1);
// Boolean type examples
let isActive = true;
let hasPermission = false;
console.log(isActive);
console.log(hasPermission);
//🔹 Used for Conditions
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("User logged in");
}
else {
    console.log("User not logged in");
}
//Used for Flags / Toggles
let isDarkMode = false;
isDarkMode = true;
//🔹 Real Example
let hasPermission1 = false;
if (!hasPermission1) {
    console.log("Access Denied");
}
//🔹 Full Example Code
let isStudent = true;
let isPassed = false;
console.log("Is Student:", isStudent);
console.log("Is Passed:", isPassed);
if (isStudent) {
    console.log("Welcome student!");
}
if (!isPassed) {
    console.log("Try again");
}
//null
let z = null;
console.log(typeof z);
//🔹 Full Example Code
let userName2 = null;
console.log(userName2);
userName2 = "Udaifa";
console.log(userName2);
//undefined
let y = undefined;
console.log(typeof y);
//🔹 Function Example
function printName(name) {
    console.log(name);
}
printName();
//🔹 Full Example Code
let userName3;
console.log(userName3);
userName3 = "Udaifa";
console.log(userName3);
//any
let data = 10;
data = "Hello";
data = true;
console.log(data);
//Function Example
function printValue(value) {
    console.log(value);
}
printValue(10);
printValue("Udaifa");
printValue(true);
//. Array Example
let arr = [10, "hello", true];
console.log(arr);
//Object Example
let user = {
    name: "udaifa",
    age: 21
};
user = "changed";
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
let value = "hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
//first check
//next use
//🔹 Another Example
let data1 = 10;
if (typeof data1 === "number") {
    console.log(data1 + 5);
}
//🔹 Full Example Code
let input = "Udaifa";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
else {
    console.log("Not a string");
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
function processValue(value) {
    if (typeof value === "string") {
        console.log("String:", value);
    }
    else if (typeof value === "number") {
        console.log("Number:", value);
    }
    else {
        const check = value;
        console.log(check);
    }
}
processValue("hello");
processValue(10);
// value always string OR number
// so else block orikkalum run aavilla
// ath kond never
//🔹 1. Type Inference
let age = 21;
let name1 = "udaifa";
age = age + 5;
console.log("Age:", age);
console.log("Name:", name1);
//🔹 2. Type Annotation
let ages;
let name2 = "udaifa";
ages = age + 5;
console.log("Age:", ages);
console.log("Name:", name1);
//🔹 3. Function Example
function add(a, b) {
    return a + b;
}
let result1 = add(10, 20);
console.log("Result:", result1);
//Array
//🔹 1. Number Array
let nums = [1, 2, 3, 4];
console.log(nums);
//🔹 2. String Array
let names = ["Udaifa", "Ubaid", "Unaisa"];
console.log(names);
//🔹 3. Add value
let nums1 = [1, 2];
nums1.push(3);
console.log(nums1);
//🔹 4. Access value
let nums2 = [10, 20, 30];
console.log(nums2[0]);
console.log(nums2[1]);
//🔹 5. Loop
let nums3 = [1, 2, 3];
nums3.forEach((n) => {
    console.log(n);
});
//Tuples
//🔹 1. Basic Example
let user1 = ["Udaifa", 21];
console.log(user1);
//🔹 2. Access Values
let user0 = ["Unaisa", 21];
console.log(user0[0]); // Udaifa
console.log(user0[1]); // 21
//🔹 Real Example (API style)
let response = [200, "Success"];
console.log("Status:", response[0]);
console.log("Message:", response[1]);
//🔹 Tuple with Different Types
let data3 = ["Test", 100, true];
console.log(data3);
//Working Full Example
let student = ["Udaifa", 19];
console.log("Name:", student[0]);
console.log("Age:", student[1]);
//Objects
//🔹 1. Basic Example
let user2 = {
    name: "Udaifa",
    age: 21
};
console.log(user2);
//🔹 2. Access Values
console.log(user2.name);
console.log(user2.age);
//🔹  Function with Object
function printUser(user) {
    console.log(user.name, user.age);
}
printUser({ name: "Udaifa", age: 19 });
