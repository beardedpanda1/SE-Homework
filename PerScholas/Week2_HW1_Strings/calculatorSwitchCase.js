//Make a calculator using switch/case and take a user input to perform any calculation. If user enters any value other than 1-5, display a message 'Invalid Option' and end the program.
/*
MENU

1. Add

2. Subtract

3. Multiply

4. Divide

5. Exit
*/

//operator choice


//whileLoop
i = 1
while (i<2){
    console.log('Menu')
    console.log('1.Add')
    console.log('2.Subtract')
    console.log('3.Multiply')
    console.log('4.Divide')
    console.log('5.Exit')
    let prompt = require('prompt-sync')()
    const operator = prompt('Select an option')


    //take your inputs
    let input1 = prompt('Input first number: ')
    let input2 = prompt('Input second number: ')
    input1=Number(input1)
    input2=Number(input2)
    let output;
    //function calculator(operator, input1, input2)
    if(isNaN(input1)||isNaN(input2))
        console.log('Input real numbers. Try again dummy!')
        else {switch(operator){
            case '1':
                {   
                output=input1+input2
                console.log(output)
                break;
                }
            case '2':
                {
                output=input1-input2
                console.log(output)
                break;
                }
            case '3':
                {   
                output=input1*input2
                console.log(output)
                break;
                }
            case '4':
                {   
                output=input1/input2
                console.log(output)
                break;
                }
            case '5':
                {
                console.log('Exit')
                i=3
                break;
                }
            default:
                {console.log('Invalid Input')}
    }

    
}}