// * Functions

// function turnIntoSec(minutes) {
//   return minutes * 60;
// }
// const minutes = 8;

// const seconds = turnIntoSec(minutes);
// console.log(seconds);

// *

// const simpleArray = [10, 20, 30];

// function summarizeNumbers(numbers) {
//   let summary = 0;

//   for (let i = 0; i < simpleArray.length; i++) {
//     summary += simpleArray[i];
//   }
//   return summary;
// }

// console.log(summarizeNumbers(simpleArray));

// *

// const getGrade = 17;

// function rateGrade(grade) {
//   if (grade > 25 && grade <= 30) {
//     console.log("Your grade is A");
//   } else if (grade > 20 && grade <= 25) {
//     console.log("Your grade is B");
//   } else if (grade > 15 && grade <= 20) {
//     console.log("Your grade is C");
//   } else if (grade > 10 && grade <= 15) {
//     console.log("Your grade is D");
//   } else if (grade > 5 && grade <= 10) {
//     console.log("Your grade is E");
//   } else {
//     console.log("Your grade is F");
//   }
// }
// rateGrade(26);

//  ! Mentor task

// let number = +prompt("Write a number!!!");

// function getNumber(value) {
//   if (value > 0) {
//     console.log("Positive number");
//   } else if (value < 0) {
//     console.log("Negative number");
//   } else {
//     console.log("Zero");
//   }
// }

// getNumber(number);

// * Factorial

// let multiple = +prompt("Write a number for factorial");

// function getFactorial(number) {
//   let fact = 1;
//   for (let i = 1; i <= number; i++) {
//     fact *= i;
//   }
//   console.log(fact);
// }
// getFactorial(multiple);

//  * input ile daxil olunan musbet ededlerin cemi

// let multipleNumOne = +prompt("Write a first number for multiple");
// let multipleNumTwo = +prompt("Write a second number for multiple");

// if (multipleNumOne > 0 && multipleNumTwo > 0) {
//   console.log(multipleNumOne + multipleNumTwo);
// } else {
//   console.log("Write only positive numbers!!!");
// }

//  !

// let counter = +prompt("Write a number");
// let sum = 0;

// function sumNumber(counter) {
//   for (let i = 0; i < counter; i++) {
//     let number = +prompt("Write a number");

//     if (number > 0) {
//       sum += number;
//     }
//   }
//   return sum;
// }

// console.log(sumNumber(counter));

//  !

// let numberOne = +prompt("Write first number");
// let numberTwo = +prompt("Write second number");

// function compareNumbers(a, b) {
//   if (a > b) {
//     console.log(`Result ${a}`);
//   } else {
//     console.log(`Result ${b}`);
//   }
// }

// compareNumbers(numberOne, numberTwo);
