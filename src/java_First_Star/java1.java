public class java1 {

    /**
     * Exercise 001 - Add Ints
     * Write a method to add to integers (int) and return the sum.
     *
     * LEVEL: BASIC
     *
     * @return      The sum
     */

    public static int addToIntegers  (int a, int b) {
        return a + b;
    }


    /**
     * Exercise 002 - Say Hello
     *
     * Given an input String, name; return a String with "Hello " appended in-front of name and "!" appended after name.
     *
     * LEVEL: BASIC
     *
     * @return      A greeting.
     */

    public static String sayHello (String name) {
        return "Hello " + name + "!";
    }


    /**
     * Exercise 004 - Add doubles
     * Write a method to add to real numbers (double) and return the sum as a double.
     *
     * LEVEL: BASIC
     *
     * @return      The sum
     */

    public static double addDoubles (double a, double b) {
        return a + b;
    }



    //This psvm is the tester
    public static void main(String[] args) {
        System.out.println(addToIntegers(5 , 5));
        System.out.println(sayHello("Tommy"));
    }
}
