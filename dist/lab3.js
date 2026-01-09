"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Hàm tính điểm trung bình (Return type + Arrow Function)
const tinhDTB = (toan, ly, hoa) => {
    return (toan + ly + hoa) / 3;
};
// Định nghĩa kiểu hàm kiểm tra số chẵn lẻ (Function as Type)
const laSoChan = (n) => n % 2 === 0;
// Hàm tạo thông tin người dùng (Default + Optional Parameter)
const taoInforUser = (name, age, role = "User") => {
    return {
        name,
        age,
        role
    };
};
// Hàm xử lý danh sách sản phẩm (Spread + Rest)
const xuLyListProduct = (...products) => {
    return [...products];
};
