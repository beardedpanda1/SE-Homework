import java.util.Scanner;
class LoopsLab{
    public static void main(String args[]){
    //FOR LOOPS
        // 1) Write a for loop that runs 10 times and print the value of the controlling variable all on the same line.
        // for (int i=1;i<=10;i++){
        //     System.out.print(i);
        // }

        // 2) Write a for loop that iterates between 1 and 10, but counts by 2. 
        //Inside the loop, print your name on different lines
        // for (int i=1; i<=10; i+=2){
        //     System.out.println(i);
        //     System.out.println("My name is Asim");
        // } 

        // 3) Write a for loop to print asterisk (*) 15 times on the same line
        // for (int i=1; i<=15; i++){
        //     System.out.print("* ");
        // }

        // 4) Write a for loop for the given output:
            // 1, 3, 5, 7, 9
            // 2, 4, 6, 8, 10
        // for (int i=1; i<=10; i+=2){
        //     System.out.print(i+ ", ");
        // }

        // for (int i=2; i<=10; i+=2){
        //     System.out.print(i+ ", ");
        // }
    //WHILE LOOPS
        // 5)Use a while loop to add up the numbers 1 to 20 into one variable. Print out the sum at the end
        // int i=1;
        // int sum=0;
        // while(i<=20){
        //     System.out.println(sum = sum + i);
        //     i = i + 1;
        // }

        // 6) Use a while loop to print out the even number from 1 to 20
        // while(i<=20){
        //     System.out.print(i);
        //     i+=2;
        // }

    //NESTED LOOPS
        // A. Write a for loop to display the following outputs: 
            //  1                                             11111
            //  22                                            2222
            //  333                                           333
            //  4444                                          44
            //  55555                                         5

        // for(int r=0; r<=5; r++){
        //     for(int c=1; c<=r; c++){
        //         System.out.print(r);
        //     }
        //     System.out.println();
        // }

        // for (int r=1; r<=5; r++){
        //     for (int c=5; c>=r; c--){
        //         System.out.print(r);
        //     }
        //     System.out.println();
        // }

        // B .Write a for loop that iterates from 1 - 20. Should print prime for all prime numbers.
            Scanner scan = new Scanner(System.in);
            int i=0;
            int num=0;
            //Empty string
            String primeNumbers = " ";
            System.out.println("Enter a number: ");
            int n = scan.nextInt();
            scan.close();
            for(i=1; i<=1; i++){
                int counter=0;
                for(num=i; num>=1; num--){
                    if(i%num==0)
                    {
                        counter = counter + 1;
                    }
                }
                if(counter == 2)
                {
                    primeNumbers = primeNumbers + i + " ";
                }
            }
            System.out.println("Prime numbers from 1 to "+n+ " are: ");
            System.out.println(primeNumbers);
            }//COME BACK LATER


        
    }
