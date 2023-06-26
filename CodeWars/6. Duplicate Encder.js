/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

//! Struggled with this one at first, but got it with some hints:

function duplicateEncode(word) {
  let lowerCaseWord = word.toLowerCase();
  let map = {};
  let response = "";

  for (let char of lowerCaseWord) {
    if (char in map) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  for (let char of lowerCaseWord) {
    if (map[char] > 1) {
      response += ")";
    } else {
      response += "(";
    }
  }

  return response;
}

//! Here's another solution on code wars. Don't fully understand it:

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
