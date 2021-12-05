//Write a program to find if a user entered string is a palindrome or not (for example "racecar" is a palindrome)

const prompt = require('prompt-sync')();
const input = prompt('enter a string: ');
let isPalindrome = true;

for (let i = 1; i<=input.length; i++) {
    if(input.charAt(i-1) !== input.charAt(input.length - i))
        isPalindrome = false;
        console.log('Your word isn\'t a palindrome')
        break;
    }


if (isPalindrome ===true) console.log('Your word is a palindrome');




//Question #4 use switch case!