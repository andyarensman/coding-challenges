/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

//! My Solution

function moveZeros(arr) {
  let response = [];
  let zeroes = [];

  arr.forEach((x) => {
    if (x === 0) {
      zeroes.push(0);
    } else {
      response.push(x);
    }
  });

  return response.concat(zeroes);
}

//! Chat GPT. uses only one loop

function moveZeros(arr) {
  let count = 0; // Count of non-zero elements

  // Move non-zero elements to the front of the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }

  // Fill the remaining positions with zeros
  while (count < arr.length) {
    arr[count] = 0;
    count++;
  }

  return arr;
}

//! More compact solution:
var moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};
