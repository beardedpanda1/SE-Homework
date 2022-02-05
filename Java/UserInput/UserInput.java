import java.util.Scanner;

class UserInput{
    public static void main(String args[]){
        // Scanner myObj = new Scanner(System.in); //Create a Scanner object
        // System.out.printIn("Enter username");

        // String userName = myObj.nextLine(); //read user input
        // System.out.printIn("Username is: " + userName);
        int inum;
        long lnum;
        float fnum;
        double dnum;
        char onechar;
        String name;
        String address;
        boolean choice;
        String str;

        Scanner scan = new Scanner(System.in); //create a scanner object
            
            //MODIFIED DAY AFTER
            //TAKE CHARACTER FROM USER
            // System.out.println("Enter Y or N: ");
            // str = scan.next();
            // onechar = str.charAt(0);

            // System.out.println("Enter any integer number: ");
            // inum = scan.nextInt();

            // System.out.println("Enter any long number: "); 
            // lnum = scan.nextLong();

            // System.out.println("Enter any decimal number: ");
            // fnum = scan.nextFloat();

            // System.out.println("Enter any big decimal number: ");
            // dnum = scan.nextDouble();

            // System.out.println("Enter true or false: ");
            // choice = scan.nextBoolean();

            // System.out.println("Enter your name: ");
            // name = scan.next(); 
                //takes only one word//only takes first word before spacebar hits//only next needed

            // scan.nextLine();
            // System.out.println("Enter your street address: ");
            
            // address = scan.nextLine();
                    // onechar = scan.nextChar(); //NOT A METHOD 
                    //come back to this, change is needed in syntax
                    //receives as string
                    //no direct method for receiving one character
                    //use charAt(any number) method

            // System.out.println(inum);
            // System.out.println(lnum);
            // System.out.println(fnum);
            // System.out.println(dnum);
            // System.out.println(choice);
            // System.out.println(name);
            // System.out.println(address);
    }
}