// console.log("Hello World");

// Basic Types
// 1 String Type
// 2 Number Type
// 3 Object Type
// 4 Array Type
// 5 Literal Type
// 6 Function Type
// 7 Tupple Type

// let myName: string = "Ali Huzaifa";
// myName = "Test";
// console.log(myName);

// let rollNumber: number = 12345;
// console.log(rollNumber);

// let isTeenager: boolean = false;
// isTeenager = true;
// console.log(isTeenager);

// let user: object = {
//   name: "Ali",
//   age: 33,
// };
// console.log(user);

// let fruits: string[] = ["Apple", "Banana", "Mango"];
// fruits.push("Avacado");
// console.log(fruits);

// let response: string | number = "Test";
// response = 12345;
// console.log(response);

// const sum = (number1: number, number2: number): number => {
//   return number1 + number2;
// };

// function sum(number1: number, number2: number): number {
//     return 0
// }

// const result = sum(10, 20);
// console.log(result);

// Tupple
// let unknown: [string, number, boolean] = ["Test", 123, false];
// console.log(unknown);


function checkFunc(item: string, age: number) {
    console.log(`Hello ${item}`);
}

checkFunc("Zaidkhan", 19) // if i dont pass arguments as many paramtes i have in my function this will make a eroor


// Generics
function identity<Type>(arg: Type): Type {
    return arg;
}
// We’ve now added a type variable Type to the identity function. This Type allows us to capture the type the user provides(e.g.number), so that we can use that information later.Here, we use Type again as the return type.On inspection, we can now see the same type is used for the argument and the return type.This allows us to traffic that type information in one side of the function and out the other.