"use strict";
//🔹 Function Syntax
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
//🔹 Function Types
let greet;
greet = (name) => {
    return "Hello " + name;
};
console.log(greet("Udaifa"));
//🔹 Optional Parameters
function greet1(name, age) {
    console.log(name, age);
}
greet1("Hasna");
greet1("Hasna", 19);
//🔹 Default Parameters
function greet2(name = "Guest") {
    console.log("Hello", name);
}
greet2();
greet2("Rana");
//🔹 Rest Parameters
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));
//🔹 Union Types
let value;
value = "hello";
value = 100;
console.log(value);
let user = {
    name: "Udaifa",
    age: 21
};
console.log(user);
let u1 = {
    name: "Shaniya",
    age: 21
};
console.log(u1);
//🔹 Type Assertions
let value1 = "hello";
let length1 = value1.length;
console.log(length1);
