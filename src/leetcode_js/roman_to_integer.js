/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/



//solution 1

var romanToInt = function(s) {
    let sum = 0;
    const rn = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }
    
    while (s.length > 0) {
        if (rn[s.slice(0,2)]) {
            sum += rn[s.slice(0,2)];
            s = s.slice(2);
            } else if (rn[s.slice(0,1)]) {
                sum += rn[s.slice(0,1)]
                s = s.slice(1);
            }
    }
    return sum;
};



//solution 2
/*We just need to scan each symbol in the string from left to right and increase or decrease the value of the integer 
number by comparing to see if the current symbol has a bigger or smaller value than the value of the next symbol. */
var romanToInt = function(s) {
    //initialize array of the roman integer values
    let symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let num = 0;
    //This is a for loop that cycles through the string passed in as a parameter
    for (var i = 0; i < s.length - 1; i++) {
        //This reassigns the num value, and catches the index of each char in the string, compared to the symbols 
        num = num + ( symbols[s[i]] < symbols[s[i+1]] ? - symbols[s[i]] : symbols[s[i]]) ;        
    }

    return num + symbols[s[i]];
};


