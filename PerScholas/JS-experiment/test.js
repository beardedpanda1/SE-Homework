let prompt = require('prompt-sync')()

let num = prompt('enter a number: ')

for (let i=0; i<100; i++){
    console.log(i)
}

console.log(typeof num)

num = Number(num) //parseInt

console.log(typeof num) 