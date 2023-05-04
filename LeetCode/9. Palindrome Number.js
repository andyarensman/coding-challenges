/* 

Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

//! My answer was trash:

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var string = x.toString();
  for (var i = 0; i < string.length / 2; i++) {
    console.log(i);
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

//! This is the better solution without converting to a string first:

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reverse = 0;
  let copy = x;
  while (copy > 0) {
    let number = copy % 10;
    reverse = reverse * 10 + number;
    copy = Math.floor(copy / 10);
  }
  return reverse == x;
};
