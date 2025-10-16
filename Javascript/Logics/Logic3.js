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

function isValid(puzzle, row, col, num) {
    // checking row
    for (let i = 0; i < 9; i++) {
        if (puzzle[row][i] === num) return false;
    }
    // checking col
    for (let i = 0; i < 9; i++) {
        if (puzzle[i][col] === num) return false;
    }

    // Check 3x3 box - ADD THIS HERE
    let boxRow = Math.floor(row / 3) * 3;
    let boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (puzzle[boxRow + i][boxCol + j] === num) return false;
        }
    }

    return true;
}

function solve(puzzle) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (puzzle[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(puzzle, row, col, num)) {
                        puzzle[row][col] = num;

                        if (solve(puzzle)) return true; // Recursion - solving the rest

                        puzzle[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function sudoku(puzzle) {
    solve(puzzle);
    return puzzle
}

// console.log(sudoku(puzzle));


console.log("A");
setTimeout(() => {
    console.log("B")
}, 0);
Promise.resolve().then(() => console.log("C"));
console.log("D")


