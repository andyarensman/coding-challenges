/*
Implement Merge Sort

Another common intermediate sorting algorithm is merge sort. Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place. But we'll start with only one array as input, so how do we get to two sorted arrays from that? Well, we can recursively divide the original input in two until we reach the base case of an array with one item. A single-item array is naturally sorted, so then we can start combining. This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the elements. The steps of merge sort, then, are:

1) Recursively split the input array in half until a sub-array with only one element is produced.

2) Merge each sorted sub-array together to produce the final sorted array.

Merge sort is an efficient sorting method, with time complexity of O(nlog(n)). This algorithm is popular because it is performant and relatively easy to implement.

As an aside, this will be the last sorting algorithm we cover here. However, later in the section on tree data structures we will describe heap sort, another efficient sorting method that requires a binary heap in its implementation.

Instructions: Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge. Good luck!

- Merge Sort is a classic divide and conquer problem.
- The following steps are involved:
    - Divide: We break the array from the middle using recursion until we’re left with 1 element.
    - Conquer: Then we sort these small arrays.
    - Combine: Finally, we merge these small arrays into one sorted array and keep doing it until we combine all the arrays.
- Time complexity of Merge Sort is O(nlogn).
- Space complexity of Merge Sort is O(n).
- It’s a stable algorithm.
*/
//! I was able to get this one on my own unlike the quick sort.

function merge(arr1, arr2) {
  var mergedArr = []

  while (arr1.length > 0 || arr2.length > 0) {
    if (arr2.length === 0 || arr1[0] <= arr2[0]) {
      mergedArr.push(arr1[0])
      arr1.splice(0, 1)
    } else if (arr1.length === 0 || arr1[0] > arr2[0]) {
      mergedArr.push(arr2[0])
      arr2.splice(0, 1)
    }
  }
  return mergedArr
}

function mergeSort(array) {
  if (array.length === 1) {
    return array
  } else {
    var half = Math.ceil(array.length / 2);    

    var firstHalf = array.slice(0, half)
    var secondHalf = array.slice(half)
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}

console.log(mergeSort([1,3,5,2,8,4,5,20]))