import java.util.Scanner;
public class Homework2 {
    
    //1
    static void Fibonacci(int N){
        
        //Fibonacci Series
        int num1 = 0, num2 = 1;
        int count = 0;

        while( count < N){
            System.out.print(num1 + " ");
            Scanner scan = new Scanner(System.in);
            int num3 = num2 + num1;
            num1 = num2;
            num2 = num3;
            count = count + 1;
        }
        
    }
    //2
    static boolean isPalindrome(String str){
        String original, reverse = "";
        
        int length = original.length();
        for(int i = length-1; i>=0; i--){
            reverse = reverse + original.charAt(i);
            if(original.equals(reverse)){
                System.out.println("Word is Palindrome");
            }else{
                System.out.print("Word is not Palindrome");
            }
        }
    }

    public static void main(String args[]){
        
        //1
        System.out.print("Enter an integer: ");
        int N = scan.nextInt();
        Fibonacci(N);

        //2
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter a word: ");
        String original = scan.nextLine();
        isPalindrome(original);
        
        
        
        


        
    }
}
