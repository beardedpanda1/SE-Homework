/*
problem#1
expected output
1
22
333
4444
55555
*/

for(r=1; r<=5; r++)
{
    for(c=1; c<=r; c++)
    //process.stdout.write(r + '\t') //'/t' spaces it out
    process.stdout.write(r.toString())
    console.log()
}  

/*
Problem#2
expected output
1
12
123
1234
12345
*/

for(r=1; r<=5; r++)
{
    for(c=1; c<=r; c++)
    //process.stdout.write(r + '\t') //'/t' spaces it out
    process.stdout.write(c.toString())
    console.log()
}  