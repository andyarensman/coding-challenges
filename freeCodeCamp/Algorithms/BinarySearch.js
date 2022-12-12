/*
Implement Binary Search

Binary search is an O(log(n)) efficiency algorithm for searching a sorted array to find an element. It operates using the following steps:

Find the middle value of a sorted array. If value == target return (found it!).
If middle value < target, search right half of array in next compare.
If middle value > target, search left half of array in next compare.
As you can see, you are successively halving an array, which gives you the log(n) efficiency. For this challenge, we want you to show your work - how you got to the target value... the path you took!
*/

function binarySearch(searchList, value) {
  let arrayPath = [];

  function recursive(array, target) {
    let middleIndex = Math.floor((array.length - 1) / 2)
    let middleValue = array[middleIndex]

    if (array.length <= 1 && middleValue !== target) {
      arrayPath = 'Value Not Found'
      return
    }

    arrayPath.push(middleValue)

    if (middleValue === target) {
      return
    }

    if (middleValue < target) {
      recursive(array.slice(middleIndex + 1), target)
    }

    if (middleValue > target) {
      recursive(array.slice(0, middleIndex), target)
    }
  }

  recursive(searchList, value)
  console.log(arrayPath)


  return arrayPath;
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];

binarySearch(testArray, 70)