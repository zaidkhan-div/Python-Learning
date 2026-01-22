// what is event loop?
// Javascript is a single-threaded meaning it can do one thing at a time. Butit handles async tasks (like,timers,network,requests)
// using event-loop so the app does not freeze

// Call-Stack: where your code runs -functions get pushed here and popped when done.
// Callback Queue (Task Queue): async callback wait here after the webapi finish.
// Event-Loop: checks if call-Stack is empty then pushes callbacks from the queue to the stack

console.log("Start");
setTimeout(() => {
    console.log("Timeout"); // callbacks waits in the queue until the stack is clear.
}, 0)
console.log("End");

// Microtasks vs Macrotasks (Task queue,Callback Queue)

// Macrotasks-Example: setTimeOut,setInterval,Dom events setImmediate(Node.js);
// they go to the Callback queue (task queue)

// Microtasks-Example: Promises .then callbacks proccess .nextTick(Node.js);
// they go to the Microtask queue which has highe priority than the callback queue.

console.log("Script start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("Script end");

// start
// end // this runs first because this is sync code
// Promise
// setTimeout


// when a promise resolves, its .then() goes into the microtask queue not the macrotask one.

async function test() {
    console.log("1");
    await Promise.resolve();
    console.log('2');
}

test();
console.log("3");

// 1 runs immediately await pauses the function, puts the rest in the microtask queue.
// 3 runs while the async function waits.
// Then 2 runs fromt the microtask queue

