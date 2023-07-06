/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/

function spinWords(string) {
  //split string by spaces
  let array = string.split(" ");

  //if length is >=5 reverse
  array.forEach((e, i, a) => {
    if (e.length >= 5) {
      a[i] = e.split("").reverse().join("");
    }
  });

  return array.join(" ");
}
