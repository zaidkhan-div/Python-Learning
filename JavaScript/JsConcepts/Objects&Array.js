let x = { name: "Jhon" };
let y = x;
x.name = 'zaid';
x = { name: "anus" }
console.log(y.name);


const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };

const result = Object.assign(target, source1, source2);

console.log(result);  // Output: { a: 1, b: 3, c: 5, d: 6 }
console.log(target);  // Output: { a: 1, b: 3, c: 5, d: 6 }