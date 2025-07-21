
// =================== payramid ==============

// const character = "#";
// const count = 8;
// const rows = [];

// for (let i = 1; i < count; i = i + 1) {
//   const space = " ".repeat(count - 1) + " ";
//   const chars = character.repeat(i);
//   // rows.push(character.repeat(i));
//   rows.push(space + chars);
// }

// let result = ""

// for (const row of rows) {
//   result = result + row + "\n"
// }

// for (i = 0; i < rows.length; i = i + 1) {
//     console.log(rows[i])
// }

// console.log(result)

// ========================= X =================== // 

// const character = "#";
// const count = 8;
// const rows = [];

// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }

// for (let i = 0; i < count; i = i + 1) {
//     rows.push(padRow(i + 1, count));
// }

// let result = ""

// for (const row of rows) {
//     result = result + row + "\n";
// }

// while (rows.length < count) {
//   rows.push(padRow(rows.length + 1, count));
// }


// ===================== X ================== //

// const character = "!";
// const count = 10;
// const rows = [];
// let inverted = false;

// function padRow(rowNumber, rowCount) {
//   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }

// for (let i = 1; i <= count; i++) {
//   if (inverted) {
//     rows.unshift(padRow(i, count));
//   } else {
//     rows.push(padRow(i, count));
//   }
// }

// let result = ""

// for (const row of rows) {
//   result = result + row + "\n";
// }

// console.log(result);

let character = "#";
let rows = [];
let count = 8;
let result = "";

function padRow() {
  for (i = 1; i < count; i++) {
    const spaces = " ".repeat(count - i);
    const char = character.repeat(2 * i - 1);
    const row = spaces + char + spaces;
    // rows.push(character.repeat(i));
    rows.push(row)

    if (i < 7) {
      result += rows[i - 1] + "\n";
    }
    else {
      result += rows[i - 1];
    }
  }
  return result;
}
padRow();
console.log(result);