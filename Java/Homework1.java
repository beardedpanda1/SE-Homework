public class Homework1 {
    public static void main(String args[]){
        // Write an if/else statement for the following requirements:
        //     If student gets 90 or higher: console log  A
        //     If students get 80 or above: console log B
        //     If students get 70 or above: console log C
        //     If students get 55 or above: console log D
        //     Any grade lower than 55 is F
        int score=99;
        if(score>=90 & score<=100){
            System.out.println("Student receives an A");
        }else if(score>=80 & score<90){
            System.out.println("Student receives a B");
        }else if(score>=70 & score<=80){
            System.out.println("Student receives a C");
        }else if(score>=55 & score<70){
            System.out.println("Student receives a D");
        }else if(score<55 & score>0){
            System.out.println("Student receives an F");
        }

        // Using switch case, do the following:
        //     Store a number between 1-7
        //     If the number is 1, display a message "Monday", 2 for "Tuesday", 3 for "Wednesday" etc.
        //     Anything other than 1-7 would default to "Invalid Input"
        int day = 3;
        switch(day){
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("Invalid day");
                break;
        }
            // Store a number in a variable called num and write an if statement: 
            //     If num is odd, display "Cool"
            //     If num is even and between 2-5, display "Not Cool"
            //     If num is even and between 6-20, display "Cool"
            //     If num is even and greater than 20, display "Not Cool
            
            int num;
                num=-12;
            long rem;
                rem=num%2;
            
            if(rem>0){
                System.out.println(num+ " is cool.");
            }else if(rem==0 & 2<=num & num<=5){
                System.out.println(num+ " is not cool.");
            }else if(rem==0 & num>=6 & num<=20){
                System.out.println(num+ " is cool.");
            }else if(rem==0 & num>20){
                System.out.println(num+ " is not cool.");
            }else{
                System.out.println(num+ " is just a num.");
            }
        }

    }
