/*
Implement Quick Sort

Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.

- Quick sort is an efficient sorting algorithm. It’s an in-place algorithm so it doesn’t take any auxilary space.
- First pick a random pivot point around which move all the smaller elements to it to the left of it and the bigger elements to the right of it.
- After getting the pivotIndex which is essentially the fixed position of that element, we find other pivotIndex by recusirvely calling this function.
- Quick sort’s worst case is O(n2) but that can be avoided if we pick random pivot point, so that way it’s big O is O(nlogn).
- It’s space complexity is O(logn).
- It’s an unstable algorithm.
*/

/* 
Didn't understand this one. Their description of what quick sorting is didn't help me come up with a solution - I didn't know what they wanted.

After studying solution 2, I have a better grasp of what's going on
*/

// ----------------- SOLUTION ONE -----------------------
//! HAven't figured solution 1 out

//Swapping array elements via ES6 array destructuring
function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

//Pivot function returns the fixed pivot point
function pivot(arr, left = 0, right = arr.length - 1) {
  let shift = left;
  for (let i = left + 1; i <= right; i++) {
    //Move all the small elements on the left side
    if (arr[i] < arr[left]) swap(arr, i, ++shift);
  }

  //Finally swapping the last element with the left
  swap(arr, left, shift);
  return shift;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);

    //Recusrively calling the function to the left of the pivot and to the right of the pivot
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  
  return array;
}

quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])

// ---------------------------- SOLUTION 2 --------------------------------
//! This one makes more sense to me

function quickSort2(array) {
  if (array.length === 0) {
    return []; //! If there aren't any values, don't do anything. There aren't any values when nothing is greater or less than the pivot point
  } else {
    const pivotValue = array[0];
    // Sort elements into three piles
    let lesser = [];
    let equal = []; //! Eventually everything will be in it's own separate 'equal' array.
    let greater = [];
    for (let e of array) {
      if (e < pivotValue) {
        lesser.push(e);
      } else if (e > pivotValue) {
        greater.push(e);
      } else {
        equal.push(e);
      }
    }
    return [...quickSort2(lesser), ...equal, ...quickSort2(greater)]; //! recursive step here. Ends when everything is an 'equal' array
    //! eventually you'll get a [...[], ...equal, ...[]] with a bunch more 'equal' array and blank arrays
  }
}