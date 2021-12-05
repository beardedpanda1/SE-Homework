let prompt = require('prompt-sync')();
let num = prompt('enter a number: '); //outside will make tables
for(let r=1; r<=5; r++)
{
    console.log()
    //name = prompt('enter your name') //when in bracket it ask 5 times
    for(let c=1; c<=6;c++)
    {
        process.stdout.write(num +'\t '); //views num as a string already
        num++ //use your name
        //ProcessingInstruction.stdout.write(r.toString()) //template
    }
    console.log() //the purpose of console.log ia ao you can easily see the output in diff rows
}


