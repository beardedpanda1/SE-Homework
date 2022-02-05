import java.util.Scanner;
class Palindrome{
    public static void main(String args[]){
        String original, reverse = "";
        Scanner a = new Scanner(System.in);
        System.out.print("Enter the word you want to check: ");
        original = a.nextLine();
        int l = original.length();
        for(int k = l - 1; k >= 0; k--)
        {
            reverse = reverse + original.charAt(k);
        }
        if(original.equalsIgnoreCase(reverse))
        {
            System.out.println(original + " is a palindrome.");
        }
        else
        {
            System. out.println(original + " is not a palindrome.");
        }
    }
}