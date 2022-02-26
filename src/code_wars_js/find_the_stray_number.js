/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
 */


//one solution
function stray(numbers) {
    for (var i in numbers) {
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) { return numbers[i] }
    }
}

//Second solution
const stray = nums => nums.reduce((a, b) => a ^ b);