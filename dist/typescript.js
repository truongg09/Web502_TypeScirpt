"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("typescipt");
//1. Core Types: number, string, boolean
let myName = "Truong"; //chuỗi ký tự
const age = 36;
const isMarried = true;
console.log(myName);
//2.Type Inference suy diễn ra kiểu dữ liệu
let count = 10;
count = "20"; //error
//3. Core Types: object
let product = {
    id: 1,
    title: "iPhone 17",
    price: 2000000
};
//4. Core Types: array number[]
let numbers = [1, 2, 3, 4, 5, "6"];
let names = ["Alice", "Bob", "Charlie", 1];
let scores = [90, 85, 88]; //number[]
//6. Special Types: any
let randomValue = 10; // gán any cho chạy code
randomValue = "Hello";
//7. Type: Union( | )
let multiType;
multiType = 20;
multiType = "Twenty";
//8. Literal Type
let status;
status = "success"; // error
status = "active";
//9. Null và Undefined
const data = {
    id: 1,
    title: "Learn TypeScript",
    description: null,
    // timeLearn: undefined
};
data.timeLearn; //undefined
data.description; //null
// 9. Unknown và Any
let input = "hello";
// input.toLowerCase(); // error
// hay gap try catch axios => catch (error: unknown) { as AxiosError} : message
// 10. Type Assertions
input.toLowerCase(); // casting
input.toLowerCase(); // casting
