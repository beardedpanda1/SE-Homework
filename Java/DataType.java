class DataType{
    public static void main(String args[]){
        
        //comments are double slash
        //block commenting /* */ same as JS
        // int inum; //name after int is name(call it whatever you want) applies to all other data types
        // long inum;
        // float fnum; //decimal numbers
        // double dnum; //decimal numbers
        // char onechar; //just holds one character at a time; lower/upper case are different //wrap it around ''
        // boolean choice; //true/false user based?
        // String objectdatatype; //explaining later on // wrap it around "" 
        // short //not using small containers
        // byte //not using small containers

        //declaring variables
        int inum; 
        long lnum;

        //1 byte is 8 bits
        //unnecessary storage will overflow, result in mem leak error => garbage collection will result getting rid of unused data
        float fnum=321.25f;//must place f at the end  32 bytes 
        double dnum=154.354; //64 bytes
         
        char onechar='f';

        boolean choice=true;

            inum=10;
            lnum=2135432;
            //add ln to the end of System.out.print to put it on its own line
            System.out.println("integer num is "+inum);
            System.out.println("long integer num is "+lnum);
            System.out.println("float num is "+fnum);
            System.out.println("double num is "+dnum);
            System.out.println("One Character is "+onechar);
            System.out.println("My Choice is "+choice);
        
        // //declaring variables

        // + //addition
        // - //subtraction
        // * //product
        // / //division
        // % //find remainder

        // int quo,rem;
        // quo = num1/num2;
        // rem= 10%3 = 1 
            
    }//closing of main()
}//closing of class

//Command prompts to run Java App
// javac DataType.java
// java DataType