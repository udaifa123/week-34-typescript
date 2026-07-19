"use strict";
//🟣 1. Promises
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
};
fetchData().then(data => console.log(data));
//🟢 2. Async / Await
const fetchData1 = () => __awaiter(void 0, void 0, void 0, function* () {
    return "Hello async";
});
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetchData1();
    console.log(res);
});
getData();
//🟡 3. Decorators
function Log(target) {
    console.log("Class created:", target.name);
}
let User = class User {
    constructor() {
        this.name = "Udaifa";
    }
};
User = __decorate([
    Log
], User);
//🔵 4. Metadata Reflection
require("reflect-metadata");
class User1 {
    constructor(name) {
        this.name = name;
    }
}
const data = Reflect.getMetadata("design:paramtypes", User1);
console.log(data);
