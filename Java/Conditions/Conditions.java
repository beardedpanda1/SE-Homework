public class Conditions{ 
    //publicly available = "public class" 
    //all other classes accessible through main class 
    //defines scope
    //no private class
    public static void main(String args[]){
        int num1,num2;
        num1=10;
        num2=5;

        
        if(num1>num2)
        {
            System.out.println(num1+ " is greater than "+num2);
        };
        else
        {
            System.out.println(num2+ " is greater than "+num1);
        };
        //COME BACK TO THIS, IT DONT WORK!
        // int score=99;
        // if(score>90 & score<=100);
        // {
        //     System.out.println("Student receives an A");
        // }
        // else if(score>80 & score<=90);
        // {
        //     System.out.println("Student receives a B");
        // }
        // else if(score>=70 & score<=80);
        // {
        //     System.out.println("Student receives a C");
        // }
        // else if(score<70 & score>0);
        // {
        //     System.out.println("Student receives an F");
        // }
        // else (score<0 ? score>100);
        // {
        //     System.out.println("Please input valid grade");
        // }
    }//end of main()
}//end of class