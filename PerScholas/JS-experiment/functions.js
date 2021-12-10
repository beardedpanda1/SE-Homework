//Write a function declaration to calculate the area of a circle.

let radius=3
area(radius)

function area(r){
    circleArea=3.14*r*r
    console.log(circleArea)
}

//Write a function expression to calculate the third side of a triangle when the user gives the first two sides


const sideC = function(a,b){
    c= (Math.sqrt(a*a + b*b))

    console.log(c);
    return c
}

sideC(3,4)


//Third, give an example of hoisting

