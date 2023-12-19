/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let vowelCount = 0;
    const updatedStr = str.toLowerCase();
    for(const char of updatedStr){
      if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
        vowelCount+=1;
      }
    }
    return vowelCount;
}

module.exports = countVowels;