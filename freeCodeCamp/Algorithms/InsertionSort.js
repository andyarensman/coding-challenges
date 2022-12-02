/* 
Implement Insertion Sort

The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.


- Insertion Sort assumes that array is divided in two parts:
    - Sorted (Initially the first element)
    - Unsorted
- Each pass, we select an element, and check it against the sorted array.
- If the selected element is smaller than the last element of the sorted array then we shift the sorted array by 1 until we find the spot to insert the selected element.
- Time comlexity of Insertion sort is of O(n2).
- It’s a stable algorithm.

*/

function insertionSort(array) {
  // Only change code below this line;
  for (var i = 1; i < array.length; i++) {
    for (var j = i - 1; j >= 0; j--) {
      //console.log(`${array[i]}[i = ${i}] and ${array[j]}[j = ${j}]`)
      if (array[i] >= array[j]) {
        var tempValue = array[i]
        array.splice(i, 1)
        array.splice(j + 1, 0, tempValue)
        break
      }
      if (j === 0 && array[i] <= array[j]) {
        var tempValue = array[i]
        array.splice(i, 1)
        array.splice(0, 0, tempValue)
      }
      //console.log(array)
    }
  }
  console.log(array)
  return array;
  // Only change code above this line
}

//insertionSort([5, 4, 33, 2, 8])
insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])