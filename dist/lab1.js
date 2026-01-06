"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
function csHCN(cDai, cRong) {
    const chuVi = (cDai + cRong) * 2;
    const dienTich = cDai * cRong;
    return { chuVi, dienTich };
}
// Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter
function tong(...numbers) {
    return numbers.reduce((tong, so) => tong + so, 0);
}
// Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
function dem(chuoi, kyTu) {
    let count = 0;
    for (let char of chuoi) {
        if (char === kyTu) {
            count++;
        }
    }
    return count;
}
// Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
function soNT(n) {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
