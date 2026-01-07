"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tạo type Product có các trường sau:
// name: string
// price: number
// sale: boolean
// rate: enum {low : 'Thấp', medium: 'Trung bình', hight : 'Cao'}
var Rate;
(function (Rate) {
    Rate["low"] = "Th\u1EA5p";
    Rate["medium"] = "Trung b\u00ECnh";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));
;
const product = {
    name: "iPhone 18",
    price: 30000000,
    sale: true,
    rate: Rate.hight
};
// Tạo mảng listProducts có các phần tử có kiểu Product
const listProducts = [
    {
        name: "iPhone 18",
        price: 30000000,
        sale: true,
        rate: Rate.hight
    },
    {
        name: "Samsung S25",
        price: 25,
        sale: false,
        rate: Rate.medium
    },
    {
        name: "Xiaomi 15",
        price: 18,
        sale: true,
        rate: Rate.low
    },
    {
        name: "OPPO Find X",
        price: 22,
        sale: true,
        rate: Rate.medium
    },
    {
        name: "Vivo X100",
        price: 28,
        sale: false,
        rate: Rate.hight
    }
];
// Nhập ít nhất 5 phần tử
// Viết hàm thêm mới 1 phần tử vào mảng listProducts có key = description, có giá trị = 'Tốt' nếu price > 5, 'Bình thường' nếu price <=5 (sử dụng map)
const addDescription = () => {
    return listProducts.map(p => ({
        ...p,
        description: p.price > 5 ? "Tốt" : "Bình thường"
    }));
};
// Viết hàm hiển thị danh sách sản phẩm: (Tên sản phẩm, giá bán, trạng thái sale,Đánh giá) (Sử dụng forEach)
const sanPham = () => {
    listProducts.forEach(p => {
        console.log(`Tên: ${p.name}, 
        Giá: ${p.price}, 
        Sale: ${p.sale}, 
        Đánh giá: ${p.rate}`);
    });
};
// Viết hàm tính tổng giá bán sản phẩm (sử dụng reduce)
const tongGiaBan = () => {
    return listProducts.reduce((tong, p) => tong + p.price, 0);
};
// Viết hàm lọc những sản phẩm đang Sale và đánh giá từ Trung bình trở lên (Sử dụng filter)
const locSanPham = () => {
    return listProducts.filter(product => product.sale === true && (product.rate === Rate.medium || product.rate === Rate.hight));
};
console.log(addDescription());
console.log(sanPham());
console.log("Tổng giá:", tongGiaBan());
console.log("Sản phẩm sale & rate >= Trung bình:", locSanPham());
