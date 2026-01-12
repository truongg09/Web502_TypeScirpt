// 1. Khai báo class: java/OOP/Angolar
class Person{
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    showInfo(): string{
        return `Name: ${this.name} - Age: ${this.age}`;
    }
}

// 2. khai báo đối tượng
const p1 = new Person("truong", 21);
console.log(p1.showInfo());

// 3. Interface cho object: định nghĩa cấu trúc object
interface IProdcut{
    name: string;
    price: number;
    isActive: boolean;
    hasDiscount?: boolean; //optional
}

const product: IProdcut={
    name: "iPhone 17",
    price: 200000,
    isActive: true,
    // hasDiscount: false,
};

// 3.2 Interface cho function
interface SumFunction{
    (a: number, b:number): number
}

const sum: SumFunction = (a,b)=>{
    return a+b;
}
sum(1,2);

// 4.1 Type Object
type TProduct={
    name: string;
    price: number;
};

const product2: TProduct={
    name: "Samsung S24",
    price: 230000,
};

// 4.2 Type với Union
type Status = "pending" | "success" | "error";
const status: Status = "success";
type Description = string | null;
type TProduct2={
    name: string;
    price: number;
    description: Description;
};

//4.3 Type kết hợp với Object
type User ={
    id: number;
    name: string;
    email: string
}

type UserResponse = User & {
    token: string;
};

const userResponse: UserResponse={
    id: 1,
    name: "truong",
    email: "email@gmail.com",
    token: "token"
}

// extend interface
interface IUser extends User {
    token: string;
}