function calculateFactorial(input) {
  if (input < 0) throw new RangeError("Number should be positive");
  let result = 1;
  for (let i = 0; i < input; i++) {
    result += result * i;
    // console.log(result);
  }
  return result
}
// console.log(calculateFactorial(4));

// Factorial using recursion
function calculateFactusingRecursion(num) {
  if (num < 0) throw new RangeError("Number should be positive");
  if (num === 0 || num === 1) {
    return 1
  }
  return num * calculateFactorial(num - 1)
}
console.log(calculateFactorial(6));


// ======== vowels Count =====

let str = "HEY JS YOU ARe amazing";
let vowels = ["a", "e", "i", "o", "u"];

function countVowels(data) {
  let count = 0;
  data.toLowerCase().split("").forEach(chr => {
    vowels.includes(chr) && count++
  });
  return count;
}

const numberOfVowels = countVowels(str);
// console.log(numberOfVowels);



function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Execute the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// greet("Alice", sayGoodbye);

function sum(num1, num2) {
  "use strict";
  num1 = 10;
  num2 = 5; // here we can overwrite the arguments untill we use strit mode
  return arguments[0] + arguments[1];
}
// console.log(sum(2, 3), "Sum-Func");

// count each character repeatition
let stringArr = "lorem ipsum dolar dollar nothing but random string";
let storeStringObj = {}
for (const x of stringArr) {
  // storeStringObj[x] this si the dynamic key = 1
  if (storeStringObj[x]) {
    storeStringObj[x] += 1
  } else {
    storeStringObj[x] = 1
  }
}
// console.log(storeStringObj, "Obj");


const checkingTrue = false;
const checkresult = !!checkingTrue;// !! this will return boolean for anyValues
console.log(checkresult, "CheckResult"); 