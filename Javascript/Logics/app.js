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
console.log(locations["button text"[0]]);
