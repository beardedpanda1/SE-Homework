class Loops{
    public static void main(String args[]){
        //for loop
        // int i;
        // for(i=1;i<=10;i++){
        //     System.out.println(i+ " for loop");
        // }

        // //while loop
        // i=1;
        // while(i<=10){
        //     System.out.println(i+ " while loop");
        //     i++;
        // }

        //practice problems
        /*output
            11111
            22222
            33333
            44444
            55555
        

        for (int r=1; r<=5; r++){
            for(int c=1; c<=5; c++){
                System.out.print(r);
            }
            System.out.println();
        }
        */

        /*expected output
        1
        12
        123
        1234
        12345
        */
        for (int r=1; r<=5; r++){
            for(int c=1; c<=r; c++){
                System.out.print(c);
            }
            System.out.println();
        }
        
    }
}