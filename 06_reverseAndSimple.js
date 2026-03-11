// Reverse-related problem: reverse a string and reverse a number.

/**
 * Reverse a string (e.g., "hello" -> "olleh").
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Reverse the digits of a number (e.g., 123 -> 321, -450 -> -54).
 * @param {number} n
 * @returns {number}
 */
function reverseNumber(n) {
  const sign = Math.sign(n);
  const reversed = Math.abs(n).toString().split("").reverse().join("");
  return sign * Number(reversed);
}

// Simple JavaScript problem: compute the sum of an array.
// (A very common beginner exercise.)

/**
 * Return the sum of numeric values in an array.
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

// Example usage
console.log("Reverse string:", reverseString("hello world")); // olleh dlrow
console.log("Reverse number:", reverseNumber(12345)); // 54321
console.log("Reverse negative number:", reverseNumber(-450)); // -54
console.log("Sum array:", sumArray([1, 2, 3, 4, 5])); // 15
