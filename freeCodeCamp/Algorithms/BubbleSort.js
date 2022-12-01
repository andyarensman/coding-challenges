/* 
Implement Bubble Sort

This is the first of several challenges on sorting algorithms. Given an array of unsorted items, we want to be able to return a sorted array. We will see several different methods to do this and learn some tradeoffs between these different approaches. While most modern languages have built-in sorting methods for operations like this, it is still important to understand some of the common basic approaches and learn how they can be implemented.

Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

Instructions: Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

- Bubble Sort is a sorting algorithm which sorts or bubbles the largest number as last element at the end of each pass.
- We compare each element to the one ahead of it, if the element before is smaller, we swap their places.
- Bubble Sort’s time complexity is O(n2).
- It’s a stable algorithm.
*/

function bubbleSort(array) {
  var sortedArr = array.slice()
  
  const swapElements = (arr, index1, index2) => {
    var newArr = arr.slice()
    newArr[index1] = arr[index2]
    newArr[index2] = arr[index1]
    return newArr
  }
  for (var j = 1; j < array.length; j++) {
    for (var i = 0; i < array.length - j; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        sortedArr = swapElements(sortedArr, i, i + 1)
      }
    }
  }

  // console.log(sortedArr)
  return sortedArr
}

bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])