/* Return string without vowels */

function disemvowel(str) {
  return str.match(/[^aeiouAEIOU]/gi).join("");
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
