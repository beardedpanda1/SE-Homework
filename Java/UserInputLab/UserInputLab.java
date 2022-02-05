import java.util.Scanner;
class UserInputLab {
    public static void main(String args[]){
        int inum;
        char ch;

        Scanner scan = new Scanner(System.in);
            System.out.println("Enter an integer number: ");
            inum = scan.nextInt();
            //1. Take a number of rows from the user. Write a for loop for 
                //each output below (for this example, the user wanted five rows):
            for(int r=1; r<=inum; r++){
                for(int c=1; c<=r; c++){
                    System.out.print(c+ " ");
                }
                System.out.println();
            }
            //COME BACK TO THIS LATER: NOT SOLVED
            /*OUTPUT
            54321
            4321
            321
            21
            1
            */
            for(int r=inum; r>1; r--){
                for(int c=r; c>0; c--){
                    System.out.print(c+ " ");
                }
                System.out.println();
            }

            //2.Take a number from the user and 
            //print the first 10 multiples of that number.

            for(int i=1; i<=10; ++i){
                System.out.println(i*inum);
            }

            

            //3. Take a character from the user and
                // determine if it's a consonant or a vowel.
            System.out.println("Enter a character: ");
            ch = scan.next().charAt(0);
            switch (ch) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    System.out.print(ch + " is a vowel");
                    break;
                default:
                    System.out.print(ch + " is a consonant");
            }
            


    }
}