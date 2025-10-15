let obj = {};

function addToObje(key, value) {
    if (obj[key]) { // if key exist push to the array
        obj[key].push(value)
    } else {
        obj[key] = [value]
    }
}

addToObje("name", "Zaidkhan");
addToObje("name", "asadzaib");
addToObje("userName", "Zaidkhan");
addToObje("user", "AnusKhan");

// console.log(obj);

var puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]];

// function solve(puzzle) {
//     let solve = [...puzzle];
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let result = [];
//     for (let row = 0; row < arr.length; row++) {
//         for (let col = 0; col < arr.length; col++) {
//             if (puzzle[row][col] === 0) {
//                 let m = Math.floor(Math.random() * 9);
//                 result.push(m);
//             } else {
//                 result.push(puzzle[row][col])
//             }
//         }
//     }
//     return result;
// }

function solve(puzzle) {
    let solve = [...puzzle];
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = [];
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr.length; col++) {
            if (puzzle[row][col] === 0) {
                let m = Math.floor(Math.random() * 9);
                result.push(m);
            } else {
                result.push(puzzle[row][col])
            }
        }
    }
    return result;
}

console.log(solve(puzzle));