//ES6
/*Higher order functions
    Another way of looping but with specific attributes
    examples: 
        map, filter, reduce, find, foreach, etc...
    
*/

/*const numsArray = [2,3,7,10,45];
//chain numsArray to .map and place argument in ()
    newNumsArray = numsArray.map((num) => {
        return num * 2
    })

    console.log(newNumsArray);
console.log(numsArray);

    //map method (HOF) does not mutate the original numsArray
            //makes a copy of it
                //mutate means modify
*/

//Exercise #3
// Write a function called getSquares, that
// takes in an array of numbers and returns an array of their squares

//ex: getSquares([1, 2, 3, 4, 5]) => [1, 4, 9, 16, 25]

/*const numSquare = [1,2,3,4,5,6,7,8,9,10];

    newNumSquare = numSquare.map((num) => {
        return num * num
    })

console.log(newNumSquare);
console.log(numSquare);*/

//filter
/*
    creates a new array
    does not mutate the original array
    returns values based on the condition
    for loop start point,end point,condition
    initiation
    declaring
    condition
    increment/decrement
*/

let numbers = [1,5,8,10,34,80]

const newNums = numbers.filter((num) => {
    return num > 7
})

console.log(newNums)
console.log(numbers)