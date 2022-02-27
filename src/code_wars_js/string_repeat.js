/* Write a function called repeatStr which repeats the given string string exactly n times.*/

//solution 1
function repeatStr (n, s) {
    return s.repeat(n);
  }

  //solution 2
  repeatStr = (n, s) => s.repeat(n)

  //solution 3
  function repeatStr (n, s) {
    var str="";
    for(var i=0; i < n; i++)
      str+=s;
      return str;
    }