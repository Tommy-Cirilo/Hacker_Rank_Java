//Complete the solution so that it reverses all of the words within the string passed in.

//solution 1
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }


  //solution2 
  const reverseWords = (str) => str.split(" ").reverse().join(" ");