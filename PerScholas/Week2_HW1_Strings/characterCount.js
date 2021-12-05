//attempt 1

/*let numOfLet 
let numOfNum 
const prompt = require ('prompt-sync')()
let input = prompt('Input is ')
let letter=input.match(/[a-z]/gi)
letter===null ? numOfLet=0:numOfLet=letter.length;
let number=input.match(/[\d]/g)
number===null ? numOfNum=0:numOfNum=number.length;
let numOfChar=(input.length)-numOfNum-numOfLet


console.log('There are ${numLet} of letters, there is ${numNum} numbers, and there are ${numChar} of special characters.')
console.log(input.length)
console.log(numOfNum)
console.log(numOfLet)*/

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

