let num=11;
let isPrime = true;
for(let i=2; i<num; i++){
    if(num%i===0){
        isPrime = false;
        break;
    }
}

if (isPrime === false){
    console.log(num + ' is not prime')
} else{
    console.log(num + ' is prime')
}
