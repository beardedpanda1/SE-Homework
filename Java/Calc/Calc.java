class Calc{
    public static void main(String num[]){
        // int add,sub,pro,quo,rem;

        int num0,num1,num2,num3,num4,num5;
        
        num0=-7;
        num1=100;
        num2=-27;
        num3=-40;
        num4=24;
        num5=0;

        int average = (num0+num1+num2+num3+num4)/5;
        
        // int add = num0 + num1;
        // int sub = num0 - num1;
        // int pro = num0 * num1;
        // int quo = num0 / num1;
        // int rem = num0 % num1;


        //1&2) add/subtract/multiply/divide(quotient & remainder) two numbers and display the output.
        
        System.out.println("1&2) The sum of these two numbers are "+(num1+num0));
        System.out.println("1&2) The difference between these two numbers are "+(num1-num0));
        System.out.println("1&2) The product of these two numbers are "+(num1*num0));
        System.out.println("1&2) The quotient of these two numbers are "+(num1/num0));
        System.out.println("1&2) The remainder of these two numbers are "+(num1%num0));

        //3) Display the average of 5 numbers: Create 5 separate variables holding  different numbers and find the average
        System.out.println("3) The average of these numbers is "+average);

        //4) Display the larger of two integers. Store these numbers in variables
        if(num1>num2)
        {
            System.out.println("4) "+num1+ " is greater than "+num2);
        }
        else
        {
            System.out.println("4) "+num2+ " is greater than "+num1);
        }

        //5) Display the largest of 3 numbers
        if(num1>num2 & num1>num3){
            System.out.println("5) "+num1+ " is the greatest number.");
        }else if(num2>num3 & num2>num1){
            System.out.println("5) "+num2+ " is the greatest number.");
        }else{
            System.out.println("5) "+num3+ " is the greatest number.");
        }

        //6) Determine if a number is negative, positive, or zero. 

        if(num0>0){
            System.out.println("6) "+num0+ " is a positive number.");
        }else if(num0<0){
            System.out.println("6) "+num0+ " is a negative number.");
        }else{
            System.out.println("6) "+num0+ " is equal to zero.");
        }

        if(num1>0){
            System.out.println("6) "+num1+ " is a positive number.");
        }else if(num1<0){
            System.out.println("6) "+num1+ " is a negative number.");
        }else{
            System.out.println("6) "+num1+ " is equal to zero.");
        }

        if(num2>0){
            System.out.println("6) "+num2+ " is a positive number.");
        }else if(num2<0){
            System.out.println("6) "+num2+ " is a negative number.");
        }else{
            System.out.println("6) "+num2+ " is equal to zero.");
        }

        if(num3>0){
            System.out.println("6) "+num3+ " is a positive number.");
        }else if(num3<0){
            System.out.println("6) "+num3+ " is a negative number.");
        }else{
            System.out.println("6) "+num3+ " is equal to zero.");
        }

        if(num4>0){
            System.out.println("6) "+num4+ " is a positive number.");
        }else if(num4<0){
            System.out.println("6) "+num4+ " is a negative number.");
        }else{
            System.out.println("6) "+num4+ " is equal to zero.");
        }

        if(num5>0){
            System.out.println("6) "+num5+ " is a positive number.");
        }else if(num5<0){
            System.out.println("6) "+num5+ " is a negative number.");
        }else{
            System.out.println("6) "+num5+ " is equal to zero.");
        }

        //7) Determine if a number is even or odd.
        int newNum0,newNum1,newNum2,newNum3,newNum4,newNum5;
        newNum0=num0%2;
        newNum1=num1%2;
        newNum2=num2%2;
        newNum3=num3%2;
        newNum4=num4%2;
        newNum5=num5%2; 
        if(newNum0>0){
            System.out.println(num0+ " is an odd number.");
        }else{
            System.out.println(num0+ " is an even number.");
        }

        if(newNum1==1 & newNum1==-1){
            System.out.println(num1+ " is an odd number.");
        }else{
            System.out.println(num1+ " is an even number.");
        }

        if(newNum2==1 & newNum2==-1){
            System.out.println(num2+ " is an even number.");
        }else{
            System.out.println(num2+ " is an odd number.");
        }

        if(newNum3==1 & newNum3==-1){
            System.out.println(num3+ " is an even number.");
        }else{
            System.out.println(num3+ " is an odd number.");
        }

        if(newNum4==1 & newNum4==-1){
            System.out.println(num4+ " is an odd number.");
        }else{
            System.out.println(num4+ " is an even number.");
        }

        if(newNum5==1 & newNum5==-1){
            System.out.println(num5+ " is an odd number.");
        }else{
            System.out.println(num5+ " is an even number.");
        }
    }
}