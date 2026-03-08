// Problem

// Write a program that prints numbers from 1 to 20.

// Rules:

// Condition	Print
// divisible by 3	Fizz
// divisible by 5	Buzz
// divisible by both	FizzBuzz
// otherwise	number

for (let i = 1; i <= 20; i++) {
    
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

  } else if (i % 3 === 0) {
    console.log("Fizz");

  } else if (i % 5 === 0) {
    console.log("Buzz");

  } else {
    console.log(i);
  }

}
