"use strict";
//🔹 Arrow Functions
const add = (a, b) => {
    return a + b;
};
console.log(add(10, 20));
//🔹 Destructuring
let user1 = { name: "Udaifa", age: 21 };
{
    let { name, age } = user1;
    console.log(name, age);
}
//  error underline varunnath name already used earlier (global scope-il) aayath kond aanu.
//  VS Code sometimes shows:
// duplicate variable
// already declared
// or conflict with global name
//✅ Fix 1 (Best  rename variables)
let user2 = { name: "Udaifa", age: 21 };
{
    let { name: userName, age: userAge } = user2;
    console.log(userName, userAge);
}
//✅ Fix 2 (Block scope use cheyyuka)
let user3 = { name: "Udaifa", age: 21 };
{
    let { name, age } = user3;
    console.log(name, age);
}
//🔹 Spread & Rest Operators
//spread
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2);
//Rest
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));
//🔹 Template Literals
let name3 = "Udaifa";
let msg = `Hello ${name3}`;
console.log(msg);
//🔹 Classes
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello " + this.name);
    }
}
let u1 = new User("Khadeeja", 29);
u1.greet();
//🔹 Access Modifiers
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
let p = new Person("kareem", 31);
console.log(p.name);
//console.log(p.age) ❌error
console.log(p.getAge());
//🔹 Namespaces
var MathUtils;
(function (MathUtils) {
    function add(a, b) {
        return a + b;
    }
    MathUtils.add = add;
})(MathUtils || (MathUtils = {}));
console.log(MathUtils.add(2, 3));
