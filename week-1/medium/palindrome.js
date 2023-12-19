/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let oldString = str.replace(/[^\w]/g, "");
  oldString = oldString.toLowerCase().trim();
  function getReverse(oldString){
    let reversedString = oldString.split("");
    let j = reversedString.length-1;
    for(let i = 0; i <= j; i++){
      let temp =reversedString[i];
     reversedString[i] =reversedString[j];
     reversedString[j] = temp;
      j--;
    }
    return reversedString.join("");
  }
  let reversedString = getReverse(oldString);
  if(reversedString == oldString){
    return true;
  }
  return false;
}

module.exports = isPalindrome;
