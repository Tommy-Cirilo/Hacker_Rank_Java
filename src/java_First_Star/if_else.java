package java_First_Star;

import java.util.Scanner;

public class if_else {

    /*In this challenge, we test your knowledge of using if-else conditional statements to automate decision-making processes.
    An if-else statement has the following logical flow:*/


    /*Task 1)
    Given an integer,n , perform the following conditional actions:

    If n is odd, print Weird
    If n is even and in the inclusive range of 2 to 5, print Not Weird
    If n is even and in the inclusive range of 6 to 20, print Weird
    If n is even and greater than 20, print Not Weird
    Complete the stub code provided in your editor to print whether or not n is weird.

    Input Format

    A single line containing a positive integer, n.

    Constraints
    1 <= n <= 100

    Output Format

    Print Weird if the number is weird; otherwise, print Not Weird.

    Sample Input 0

    3
    Sample Output 0

    Weird
    Sample Input 1

    24
    Sample Output 1

    Not Weird
    Explanation

    Sample Case 0:
    n is odd and odd numbers are weird, so we print Weird.

    Sample Case 1:
    n > 20 and n is even, so it isn't weird. Thus, we print Not Weird.*/

    private static final Scanner scanner = new Scanner(System.in);



    public static void main(String[] args) {
//        This is the 1st Pass Test Case for the problem 1)
        int N = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        if (1 <= N && N <= 100 && N % 2 == 1) {
            System.out.println("Weird");
        } else
        if (1 <= N && N <= 100 && N % 2 == 0 && N >= 2 && N <= 5) {
            System.out.println("Not Weird");
        } else
            if (1 <= N && N <= 100 && N % 2 == 0 && N >= 6 && N <= 20) {
                System.out.println("Weird");
            } else
                if (1 <= N && N <= 100 && N % 2 == 0 && N > 20) {
                    System.out.println("Not Weird");
                }
        scanner.close();

    }


}
