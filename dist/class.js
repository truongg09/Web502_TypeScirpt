"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Khai báo class: java/OOP/Angolar
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        return `Name: ${this.name} - Age: ${this.age}`;
    }
}
// 2. khai báo đối tượng
const p1 = new Person("truong", 21);
console.log(p1.showInfo());
const product = {
    name: "iPhone 17",
    price: 200000,
    isActive: true,
    // hasDiscount: false,
};
const sum = (a, b) => {
    return a + b;
};
sum(1, 2);
const product2 = {
    name: "Samsung S24",
    price: 230000,
};
const status = "success";
const userResponse = {
    id: 1,
    name: "truong",
    email: "email@gmail.com",
    token: "token"
};
