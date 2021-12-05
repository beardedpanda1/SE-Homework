//Write a program to find how many letters, numbers, and special characters are in a user entered string.

let prompt = require ("prompt-sync")()
let word = prompt('Type something random! ').toLowerCase()
let chars = word.length

letCount = 0
charCount = 0
numCount = 0

for(let i = 0; i < chars; i++){
    if(word.charCodeAt(i)>=97 && word.charCodeAt(i)<=122)
    letCount++
    else if(word.charCodeAt(i)>=48 && word.charCodeAt(i)<=57)
    numCount++
    else
    charCount++
}
console.log('There are ' + letCount + ' letters, ' + numCount + ' numbers, and ' + charCount + ' special characters.')

