// Problem

// Check if a number is a palindrome.

// A palindrome number reads the same forward and backward.

let num = 121;
let original = num;
let rev = 0;

while (num != 0) {

    rev = rev * 10 + num % 10;
    num = Math.floor(num / 10);

}

if (original == rev) {
    console.log("This is palindrome");
} else {
    console.log("This is not palindrome");
}