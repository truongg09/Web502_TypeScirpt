// Hàm tính điểm trung bình (Return type + Arrow Function)
const tinhDTB= (toan: number,ly: number,hoa: number): number =>{
    return (toan+ly +hoa)/3;
};
// Định nghĩa kiểu hàm kiểm tra số chẵn lẻ (Function as Type)
type KiemTraChanLe = (n: number) => boolean;
const laSoChan: KiemTraChanLe= (n)=> n % 2 === 0;
// Hàm tạo thông tin người dùng (Default + Optional Parameter)
const taoInforUser =(
    name: string,
    age?: number,
    role: string = "User"
)=>{
    return {
      name,
      age,
      role
    };
};
// Hàm xử lý danh sách sản phẩm (Spread + Rest)
const xuLyListProduct =(
    ...products: {
      name: string;
      price: number;
      sale: boolean;
    }[]
)=>{
    return [...products];
};
  
  