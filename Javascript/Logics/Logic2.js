function calculateFactorial(input) {
  let result = 1;
  for (let i = 0; i < input; i++) {
    result += result * i;
    // console.log(result);
  }
  return result
}
console.log(calculateFactorial(4));

// ======== vowels Count ====

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
console.log(sum(2, 3), "Sum-Func")