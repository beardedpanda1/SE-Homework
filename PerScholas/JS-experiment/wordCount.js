
//Write a program to find how many time a user entered word appears on a string

let statement='Peter Piper picked a peck of pickled peppers A peck of pickled peppers Peter Piper picked If Peter Piper picked a peck of pickled peppers Where’s the peck of pickled peppers Peter Piper picked?'
const prompt = require('prompt-sync')()
let word=prompt('Type your word here! ')

let words=statement.split(' ')
let count = 0
wordCount=words.length

console.log(words)

for (let i=0; i < wordCount; i++){
    if(words[i].toLowerCase()==word.toLowerCase())
    count++
}   

console.log('The word is used ' + count + ' times.')
