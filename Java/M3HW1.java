public class M3HW1 {
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
        }else if(score<=55 & score>0){
            System.out.println("Student receives an D");
        }
        // }else (score<0 ? score>100){
        //     System.out.println("Please input valid grade");
        // }
    }
}