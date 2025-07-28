// ========================== Mine one
// let character = "#"; 
// let rows = [];
// let count = 8;
// let result = "";

// function padRow() {
//   for (i = 1; i < count; i++) {
//     const spaces = " ".repeat(count - i);
//     const char = character.repeat(2 * i - 1);
//     const row = spaces + char + spaces;
//     // rows.push(character.repeat(i));
//     rows.push(row)

//     if (i < 7) {
//       result += rows[i - 1] + "\n";
//     }
//     else {
//       result += rows[i - 1];
//     }
//   }
//   return result;
// }
// padRow();
// console.log(result);

// =================== Factorial ================ 

// function factorial(n) {
//   let num = 1;
//   // for (let i = 1; i <= n; i++) {
//   //   num *= i
//   // }
//   if (n === 0 || n === 1) {
//     return num
//   }
//   else {
//     return n * factorial(n - 1)
//   }
// };

// console.log(factorial(5));


// =================== Grade system Average ==============

// function getAverage(scores) {
//   let sum = 0;
//   for (let i = 0; i < scores.length; i++) {
//     sum += scores[i] / scores.length
//   }
//   return sum
// }

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));


function getGrade(score) {
  if (score === 100) {
    return "A++"
  } else if (score >= 90) {
    return "A"
  } else if (score >= 60) {
    return "D"
  } else {
    return "F"
  }
}
console.log(getGrade(60))

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  if (grade !== "F") {
    return "Class average: " + average + ". Your grade: " + grade + ". You passed the course.";
  } else {
    return "Class average: " + average + ". Your grade: " + grade + ". You failed the course.";
  }
}

