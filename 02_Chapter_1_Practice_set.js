// | Marks    | Grade |
// | -------- | ----- |
// | 90+      | A     |
// | 75–89    | B     |
// | 50–74    | C     |
// | Below 50 | Fail  |

//Question

//Take marks input from user and print grade:

let marks = "fdsfdsf";

if (isNaN(marks)) {
  console.log("Invalid Input");
} else if (marks >= 90) {
  console.log("You got grade A");
} else if (marks >= 75) {
  console.log("You got grade B");
} else if (marks >= 50) {
  console.log("You got grade C");
} else {
  console.log("Fail");
}


//or 

// let grade;
// let score = "Pramod";

// if (typeof score !== "number") {
//     console.log("Score must be a number");
//     return;
// }

// if (score < 0 || score > 100) {
//     console.log("Score must be between 0 and 100");
//     return;
// }

// if (score >= 90) {
//     grade = "A";
// }
// else if (score >= 80) {
//     grade = "B";
// }
// else if (score >= 70) {
//     grade = "C";
// }
// else if (score >= 60) {
//     grade = "D";
// }
// else {
//     grade = "F";
// }

// console.log("Score:", score, "Grade:", grade);


// let a = 20;
// console.log (typeof a);