import java.util.Scanner;
class StringClass{
    public static void main(String args[]){
        String fname;
        String lname;
        String str1="Friday";
        String str2="friday";

        Scanner scan = new Scanner(System.in);

        System.out.println("Enter your first name: ");
        fname = scan.nextLine();
        System.out.println("Enter your last name: ");
        lname = scan.nextLine();

        String fullname = fname.concat(lname);
            //could be variables or inside " "
            // concat by putting + between variables or " "

        // System.out.println(fullname.length());
        // //length of string

        // System.out.println(fullname.trim());
        // //trim takes out spaces between strings

        // System.out.println(fname.charAt(2));
        // //character value (in this case the third character//index starts at 0)

        // System.out.println(fname.indexOf('a'));
        // //searches for a and gives index value

        // System.out.println(fname.lastIndexOf('a'));

        // System.out.println(fname.isEmpty());
        //true/false

        // System.out.println(fname.contains("A"));//case sensitive

        // System.out.println(fname.substring(3,7));
        //starts from 3rd location
        //ends at 7th location 
        //substring(start)
        //substring(start,end)

        // System.out.println(str1.equals(str2));
        //case sensitive

        // System.out.println(str1.equalsIgnoreCase(str2));
        //not case sensitive

        // System.out.print(fname.toLowerCase());
        //all characters to lower case

        // System.out.print(fname.toUpperCase());
        //all characters to uppercase

        // System.out.println(fname.startsWith("s"));
        //if it starts with character(s) in (""), return true/otherwise false
        //case sensitive

        // System.out.println(fname.endsWith("m"));
        //if it ends with character(s) in (""), return true/otherwise false
        //case sensitive

        
    }
}