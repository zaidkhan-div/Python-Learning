// What is Garbage Collection?
// Garbage collection in JavaScript is a form of automatic memory management handled by the JavaScript engine
// Which collect the unUsed Variable that they are not used in Browser
// We don't have to do it manullay
// closure are not Garbage collector variables in closure are not free

// CallBack

function result(name) {
  let username = `Hello ${name}`
  return username;
}

function callback(data) {
  return data;
}

let outPut = callback(result('Zaid'));
console.log(outPut);


// let foo = 10;
// (
//   function () {
//     console.log(foo);
//     let foo = 20; // here hoisitng does not work because of the lexical scops 
//   }
// )();
(
  function () {
    console.log('Direct envoked the fucntion')
  }
)();

var a = 100;
const b = 20;
{
  var a = 10;
  const b = 20;
  let c = 30;
  // {} inside this brakcet const & let are Blocked scope
}
console.log(a) // this is called shadowind we will access a 


// ======================= Closure ============= //
function createCounter() {
  let count = 0; // This 'count' variable is part of the lexical environment

  return function () { // This is the inner function (the closure)
    count++;
    console.log(count); // They still remeber their lexical Scope
  };
}
const myCounter = createCounter(); // 'myCounter' now holds the inner function
myCounter(); // Output: 1
myCounter(); // Output: 2
// .....


// Uses of Closures:
// -Module Design Pattern
// -Currying
// -Function like once
// -memoize
// -maintaining state in async world
// -setTimeOut
// -Iterators
// -and many more...

// ========= Currying =======
function curriedAdd(a) {
  return function (b) {
    return a + b
  }
}
console.log(curriedAdd(1)(10)) // this is called currying function


function outer() {
  let a = 10;
  function inner() {
    console.log(a, " Closure")
  }
  return inner
}
outer()();

