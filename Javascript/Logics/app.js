// false, 0, "", null, undefined, and NaN. Javascript consider them false  

// function addTwoNums(a, b) {
//     const addTwoNums = a + b;
//     console.log('Sum of two is', addTwoNums)
// }
// addTwoNums(1.5, 1.5);


// function calculateArea(length, width) {
//     if (length <= 0) {
//         throw new RangeError('Length should be a positive number');
//     }
//     if (width <= 0) {
//         throw new RangeError('Width should be a positive number')
//     }
//     const calculateArea = length * width;
//     return calculateArea;
// }

// let result = calculateArea(2, -3);

// function findSmallestInt(arr) {
//     let Smallest = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < Smallest) {
//             Smallest = arr[i]
//         }
//     }
//     return Smallest
// }
// console.log(findSmallestInt([34, 15, 88, 2]), "Smallest Number")

// var findMedianSortedArrays = function (nums1, nums2) {
//     const mergedArray = [...nums1, ...nums2];
//     return mergedArray
// };

// const result = findMedianSortedArrays([1, 2], [3, 4]);
// console.log(result)


const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    // "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    // "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  }
];
// console.log(locations[1]["button text"]);

// let arr = {
//     name: "ZaidKhan",
//     secondObj: {
//         age: 18
//     }
// };

// let { secondObj: { age } } = arr;
// console.log(age)

let numbers = [23, 35, 56, 3, 12, 4, 5, 7, 2, 6, 7, 1];
while (numbers.length < 10) {
  numbers.push(Math.floor(Math.random() * 10))
}
console.log(numbers.length)


function checkInstanceOf(param1) {
  if (param1 instanceof Object) {
    return true
  }
  else {
    return false
  }
}

console.log(checkInstanceOf(new Date()))


let firsName = ['Zaid', 'Anus', 'Salman', 'Zain', 'Taousef'];
let lastName = ['Khan', 'Afridi', 'Karim', 'Afridi', 'Ali'];
let fullName = [];

for (let i = 0; i < firsName.length; i++) {
  for (let j = 0; j < lastName.length; j++) {
    fullName.push(firsName[i] + lastName[j])
  }
  // fullName.push(firsName[i] + lastName[i])
}
// console.log(fullName);

let text = "The New Yorker magazine doesn't allow the phrase World War II They say it should be the Second World War.";
for (let i = 0; i < text.length; i++) {
  // const word = text.slice(i, i + 12);
  // if (word === "World War II") {
  //   text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
  // }
}
console.log(text);