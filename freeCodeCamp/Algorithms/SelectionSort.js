/* 
Implement Selection Sort

Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.


- Selection Sort is one of the easier sorting algorithm to understand and implement.
- This algorithm splits the array in two parts:
    - Sorted
    - Unsorted
- The Sorted part is at the beginning of the array and Unsorted part afterwards.
- Each pass, initially we assume the first element to be the smallest then we loop through the whole array and select the smallest element. At the end of the pass we swap smallest element to the sorted array.
- It has O(n2) time complexity.

*/

function selectionSort(array) {
  for (var i = 0; i < array.length - 1; i ++) {
    var lowestNumIndex = i;
    for (var j = i; j < array.length; j++) {
      if (array[j] < array[lowestNumIndex]) {
        lowestNumIndex = j;
      }
    }
    [array[i], array[lowestNumIndex]] = [array[lowestNumIndex], array[i]]
  }
  console.log(array);
  return array;
  // Only change code above this line
}

selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])