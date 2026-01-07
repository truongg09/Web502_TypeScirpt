console.log("typescipt");

//1. Core Types: number, string, boolean
let myName: string = "Truong"; //chuỗi ký tự
const age: number = 36;
const isMarried: boolean = true;

console.log(myName);

//2.Type Inference suy diễn ra kiểu dữ liệu
let count = 10;
count = "20"; //error

//3. Core Types: object
let product : {
    id: number;
    title: string;
    price: number;
} = {
    id: 1,
    title: "iPhone 17",
    price: 2000000
};

//4. Core Types: array number[]
let numbers: number[] = [1,2,3,4,5,"6"];
let names: string[] = ["Alice", "Bob", "Charlie", 1];
let scores: Array<number> = [90, 85, 88]; //number[]

//6. Special Types: any
let randomValue: any = 10; // gán any cho chạy code
randomValue = "Hello";

//7. Type: Union( | )
let multiType: number | string;
multiType = 20;
multiType = "Twenty";

//8. Literal Type
let status: "active" | "inactive" | "pending";
status = "success"; // error
status = "active";

//9. Null và Undefined
const data:{
    id: number;
    title: string;
    description: string | null;
    timeLearn?: number | undefined;
}= {
    id: 1,
    title: "Learn TypeScript",
    description: null,
    // timeLearn: undefined
};
data.timeLearn; //undefined
data.description; //null