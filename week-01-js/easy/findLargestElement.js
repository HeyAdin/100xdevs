/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largerstNum = numbers[0];
    if (numbers.length == 0) {
        return undefined;
    }
    for (const num of numbers) {
        if (largerstNum < num) {
            largerstNum = num;
        }
    }
    return largerstNum;
}

module.exports = findLargestElement;