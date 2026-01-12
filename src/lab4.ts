// Bài 1 Tạo type Student gồm id, name, score.
class Student{
    id: number;
    name: string;
    score: number;

    constructor(id: number,name:string, score:number){
        this.id = id;
        this.name = name;
        this.score = score;
    }

    showInfo(): string{
        return `ID: ${this.id} - Name: ${this.name} - Age: ${this.score}`;
    }
}

const s1 = new Student(1, "truong", 21);
console.log(s1.showInfo());

// Bài 2 Tạo interface User có id, email là required, còn phone optional.
interface IUser{
    id: number;
    email: string;
    phone?: number; //optional
}

const user: IUser={
    id: 1,
    email: "truong@gmail.com"
};
// Bài 3 Tạo type function Calculate cho phép cộng và nhân. Nhận 2 số a, b
// Trả về number Viết hàm:
// add(a, b)
// multiply(a, b)
interface Calculate{
    (a: number, b:number): number
}

const sum: Calculate = (a,b)=>{
    return a+b;
}
const multiply: Calculate = (a,b)=>{
    return a*b;
}
sum(1,2);
multiply(2,3);
// Bài 4 Tạo type ApiStatus gồm: "idle" | "loading" | "success" | "error"
// Viết function logStatus(status: ApiStatus) Nếu:
// loading → in "Đang tải..."
// success → in "Thành công"
// error → in "Có lỗi xảy ra"
type ApiStatus = "idle" | "loading" | "success" | "error";
const status: ApiStatus = "success";
const logStatus = (status: ApiStatus)=> {
    if (status === "loading") {
      console.log("Đang tải...");
    } else if (status === "success") {
      console.log("Thành công");
    } else if (status === "error") {
      console.log("Có lỗi xảy ra");
    }
};
logStatus(status);
