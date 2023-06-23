/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]



NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

 */

//! I only used chatGPT to remember array methods and to find my bug near the end:

snail = function (array) {
  let output = [];

  let recursive = function (newArray) {
    let length = newArray.length;

    // copy the first line
    output.push(...newArray[0]);

    //copy the last number of each
    for (let i = 1; i < length; i++) {
      output.push(newArray[i][newArray[i].length - 1]);
    }

    //copy the last row in reverse
    output.push(...newArray[length - 1].slice(0, -1).reverse());

    // copy the first of each in reverse
    for (let i = length - 2; i > 0; i--) {
      output.push(newArray[i][0]);
    }

    // create newnew array
    newArray.shift();
    newArray.pop();
    for (let i = 0; i < newArray.length; i++) {
      const innerArray = newArray[i];
      innerArray.shift(); // Remove first element
      innerArray.pop(); // Remove last element
    }

    //repeat or end
    if (newArray.length === 1) {
      output.push(newArray[0][0]);
    } else if (newArray.length === 0) {
      return;
    } else {
      recursive(newArray);
    }
  };

  recursive(array);

  return output;
};

//! this is a faster solution by GPT:

function snail(array) {
  const output = [];

  while (array.length > 0) {
    // Copy the first row
    output.push(...array.shift());

    // Copy the last element from each remaining row
    for (let i = 0; i < array.length; i++) {
      output.push(array[i].pop());
    }

    // Copy the last row in reverse order
    if (array.length > 0) {
      output.push(...array.pop().reverse());
    }

    // Copy the first element from each remaining row in reverse order
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i].shift());
    }
  }

  return output;
}
