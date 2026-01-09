// Function có return, params
function add(a: number, b: number): number{
    return a+b;
}

const addResult = (a: number, b: number): number => a+b;

add(2,3);
addResult(4,5);
//add(undefined, null); //error

//Function không có return: kiểu Void
function logMessage(message: string): void{
    console.log("Message", message);
}

//props torng react sang component: onClick: ()=> void
//props torng react sang component: onSearch: (keyword: string)=> string

//Tham số mặc định (default parameter)
function greetUser(name: string, greeting: string | number = "hello"): string{
    return `${greeting}, ${name}!`;
}

greetUser("alice"); //hello, alice!
greetUser("alice", "xin chao"); //Xin chao, alice!

// 4. Tham số tùy chọn (Optional Parameter)
function describePerson(name: string, age?: number): string {
    if (age) {
      return `${name} is ${age} years old.`;
    }
    return `${name} has no age specified.`;
  }
  
  // 5. Toán tử spread (Spread Operators)
  function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  sum(1, 2);
  sum(1, 2, 3, 4, 5);
  
  // 6. Rest Parameter
  function multiply(factor: number, ...numbers: number[]): number[] {
    return numbers.map((num) => num * factor);
  }