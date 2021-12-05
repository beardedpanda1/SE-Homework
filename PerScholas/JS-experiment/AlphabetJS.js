//write a program using a for loop to print all the characters from A-Z.
/*let alphabet;
for(i=9,alphabet='';++i<36;){
    alphabet+=i.toString(36);
}

console.log(alphabet);*/

//Using a while loop, print each character of a user entered string.
/*let prompt= require('prompt-sync')()
userName = prompt('Enter a string: ')
let i=0;
while(i<=(userName.length-1))
{
    console.log(userName.charAt(i));
    i++
}*/

//Print a given string in reverse order without using the reverse() method
/*let str = "house"
let j = str.length
while(j>0){
    process.stdout.write(str.charAt(j-1))
    j--
}*/


//Print the total number of vowels in a given string
/*let a="salkdfoaiufjsakvbskjdfghbkasjvnhasdhdkasldfhasdgfszkdbvjnsalkdhjfwweuoryhsad"
let b=a.length
let y=a.toUpperCase()
let d=0
let e=0
while (d<=b){
    let x=y.charAt(d)
    if (x=='A'||x=='E'||x=='I'||x=='O'||x=='U'||x=='Y')
    e++
    d++
}
console.log(e);
*/
    //let a='aeiou'
    //let b=a.match(/[aeiouy]gi).length //or get rid of all the other crap 
    //console.log(b)

//Print the total number of times a character shows up in a string (take a character as input from the user)

/*const x='Print the total number of times a character shows up in a string'
const a= require('prompt-sync')()
let b=a('Input is ') 
let fin=x.length //final 
let int=0 //initial
let count=0 //counter
while (int<fin) {
    if(x.charAt(int)==b){
        count++
    }
    int++
}
console.log(count)*/



cookiecost=4
pay=10
quarter=.25
time=(pay-cookiecost)/quarter
int=0 //int=1
//counter=0
while(int<time){
    int++
    //counter++
}
console.log(int);