"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Hàm tính điểm trung bình (Return type + Arrow Function)
const tinhDTB = (toan, ly, hoa) => {
    return (toan + ly + hoa) / 3;
};
tinhDTB(9, 10, 8);
const laSoChan = (n) => n % 2 === 0;
laSoChan(8);
// Hàm tạo thông tin người dùng (Default + Optional Parameter)
const taoInforUser = (name, age, role = "User") => {
    return {
        name,
        age,
        role
    };
};
taoInforUser("Truong", 21);
// Hàm xử lý danh sách sản phẩm (Spread + Rest)
const xuLyListProduct = (...products) => {
    return [...products];
};
xuLyListProduct({
    name: "iPhone 17",
    price: 2800000,
    sale: true
});
