/*
numarray=[]
value=2
for(let r=0;r<5;r++)
{
    numarray[r]=[] //making the row an array
    for(let c=0;c<6;c++)
    {
        numarray[r][c]=value
            value +=2
    }
}
console.log(numarray)
*/
//3D matrix example
numarray = []
value = 2
for(let x = 0; x < 5; x++){
    numarray[x] = []
    for(let y = 0; y < 6; y++){
        numarray[x][y] = []
        for(let z = 0; z < 7; z++){
            numarray[x][y][z] = value += 2
        }
    }
}
console.log(numarray)
console.log(numarray[0][0][0])
