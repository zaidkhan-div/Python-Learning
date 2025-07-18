
// =================== payramid ============== 

// const character = "#";
// const count = 8;
// const rows = [];

// for (let i = 1; i < count; i = i + 1) {
//     rows.push(character.repeat(i));
// }

// // let result = ""

// // for (const row of rows) {
// //     result = result + row + "\n"
// // }

// // console.log(rows);

// for (i = 0; i < rows.length; i = i + 1) {
//     console.log(rows[i])
// }

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
    result = result + row + "\n";
}

// while (rows.length < count) {
//   rows.push(padRow(rows.length + 1, count));
// }

console.log(result);

// false, 0, "", null, undefined, and NaN. Javascript consider them false  



const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);