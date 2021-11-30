let age = 19
if (age >=5 && age <=10)
{
    console.log("you are in elementary school.")
}
else if (age >=11 && age <=13)
{
    console.log("you are in middle school.")
}
else if (age >=14 && age <=17)
{
    if (age >=16 && age <=17)
    {
        console.log("you are a high schooler that is eligible to drive!")
    }
    else if (age >=14 && age <=15)
    {
        console.log("you are a high schooler.")
    }   
}
else{
    console.log("you are not in prison")
}