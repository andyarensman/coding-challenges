/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

//! Here is my solution:

function sortArray(array) {
  if (array.length === 0) {
    return [];
  }
  let odds = [];
  let evens = [];
  //separate the array into odds and evens, but keep track of the index of the evens
  array.forEach((x, i) => {
    if (x % 2 === 0) {
      evens.push([x, i]);
    } else {
      odds.push(x);
    }
  });

  //sort the odds
  odds.sort((a, b) => a - b);

  //merge them back together
  for (let i = 0; i < evens.length; i++) {
    odds.splice(evens[i][1], 0, evens[i][0]);
  }

  return odds;
}
