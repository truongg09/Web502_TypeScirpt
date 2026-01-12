"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Bài 1 Tạo type Student gồm id, name, score.
const student = {
    id: 1,
    name: "truong",
    score: 9
};
console.log(student);
// Bài 2 Tạo interface User có id, email là required, còn phone optional.
const user = {
    id: 1,
    email: "truong@gmail.com"
};
// Bài 3 Tạo type function Calculate cho phép cộng và nhân. Nhận 2 số a, b
const sum = (a, b) => {
    return a + b;
};
const multiply = (a, b) => {
    return a * b;
};
sum(1, 2);
multiply(2, 3);
// Bài 4 Tạo type ApiStatus gồm: "idle" | "loading" | "success" | "error"
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
