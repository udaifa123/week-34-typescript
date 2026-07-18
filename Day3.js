"use strict";
//🔹 1. Enums
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = Role.User;
console.log("Role:", userRole);
//🔹 2. Literal Types
let status1;
status1 = "success";
console.log("Status:", status1);
function handleResponse(res) {
    if (res.type === "success") {
        console.log("Data:", res.data);
    }
    else {
        console.log("Error:", res.message);
    }
}
handleResponse({ type: "success", data: "Login Success" });
handleResponse({ type: "error", message: "Invalid Login" });
let user = {
    name: "Udaifa",
    age: 19
};
console.log(user);
//🔹 5. Generics
function identity(value) {
    return value;
}
console.log(identity(100));
console.log(identity("hello"));
//🔹 6. Generic Constraints
function printLength(item) {
    console.log("Length:", item.length);
}
printLength("hello");
printLength([1, 2, 3]);
let u1 = {
    name: "Unaisa"
};
console.log(u1);
let p = {
    title: "Shoes"
};
console.log(p);
let item = {
    title: "Bag",
    price: 1500
};
console.log(item);
///////////////////////////////////////////////////////////////////
//✅ Deliverables
//✅ 1. Build Reusable Generic Utilities
function identity1(value) {
    return value;
}
console.log(identity1(100));
console.log(identity1("hello"));
//Another Utility (Generic Array)
function getFirstElemnt(arr) {
    return arr[0];
}
console.log(getFirstElemnt([1, 2, 3]));
console.log(getFirstElemnt(["a", "b", "c"]));
//Generic with Constraint
function printLength1(item) {
    console.log("Length:", item.length);
}
printLength1("hello");
printLength1([1, 2, 3]);
