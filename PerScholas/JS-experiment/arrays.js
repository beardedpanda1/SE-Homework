let num=[]
num.push(10,20,30)
//console.log(num)
num.push(40)
console.log(num)

//to populate array num with new values
for(i=0; i<10; i++) //can use any other variable BUT KEEP IT CONSISTENT
{
    //num.push(2*j)
    num[i] = (5*(i+1))
}

//to display the values of num array
for(i=0;i<num.length;i++)
{
    console.log(num[i])
}