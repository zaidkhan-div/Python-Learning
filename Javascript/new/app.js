let rows = [];
let count = 8;
let character = "*";
let result = ""

// for (let i = 1; i <= count; i++) {
//     // rows.push(character.repeat(2 * i - 1));
//     const space = " ".repeat(count - i)
//     const char = character.repeat(2 * i - 1)
//     const row = space + char;
//     rows.push(row);
//     if (i <= 7) {
//         result += rows[i - 1] + "\n";    
//     } else {
//         result += rows[i - 1];
//     }
//     // result += rows[i - 1] + "\n";

// }

// =========================== Reversed Order ============= //

// for (let i = 1; i <= count; i++) {
//     rows.unshift(character.repeat(2 * i - 1));
//     // result += rows[i - 1] + "\n";
// }
// for (const row of rows) {
//     result += row + "\n"
// }

// console.log(rows[0]);
// console.log(result);


// let obj = {
//     name: "ZaidKhan",
//     secondObj: {
//         age: 18
//     }
// };

// let { secondObj: { age } } = obj;
// console.log(age);

// function checkObject(obj) {
//     if (!Object.keys(obj).length == 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(checkObject({a:"Zaid"}));

// let arr = [1, [1234, ["Inside"]]];
// const [item, [item2, [item3]]] = arr
// console.log(item3);

// let str = "Zaid khan is removing all the spacing from this string";
// let outPut = str.split(/\s+/).join(' '); 

// // for (let i = 0; i < str.length; i++) {
// //     if (str[i] === " ") {
// //         outPut += str[i + 1];
// //     } else {
// //         outPut += str[i];
// //     }
// // };
// console.log(outPut);

// ========== Today LeetCode

// let absMath = -10;
// let output = Math.abs(absMath); 
// console.log(output);

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

let findMedianSortedArrays = (nums1, nums2) => {
    let newArr = [...nums1, ...nums2];
    // let output = [];
    let output;
    // Find the mid num of an array
    for (let i = 0; i < newArr.length / 2; i++) {
        output = newArr[i]
    }
    // This plus the mid nums of an array
    // for (let i = 0; i < newArr.length; i++) {
    //     // output.push(newArr[i]);
    //     if (i < newArr.length / 2) {
    //         output = newArr[i] + newArr[i + 1]; 
    //     }
    // }

    return output
};

findMedianSortedArrays([1, 2], [3]);
