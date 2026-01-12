"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student = {
    id: 1,
    name: "truong",
    score: 9
};
console.log(student);
const user = {
    id: 1,
    email: "truong@gmail.com"
};
const sum = (a, b) => {
    return a + b;
};
const multiply = (a, b) => {
    return a * b;
};
sum(1, 2);
multiply(2, 3);
const status = "success";
const logStatus = (status) => {
    if (status === "loading") {
        console.log("Đang tải...");
    }
    else if (status === "success") {
        console.log("Thành công");
    }
    else if (status === "error") {
        console.log("Có lỗi xảy ra");
    }
};
logStatus(status);
