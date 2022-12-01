/*
Pairwise
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
*/

function pairwise(arr, arg) {
  var indexArr = []
  var indicesUsed = []
  var count = 0;

  // Find pairs in arr that sum to the arg
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {

      //check if nums sum to arg and if j index has been used
      if (arr[i] + arr[j] === arg && !indicesUsed.includes(j) && !indicesUsed.includes(i)) {
        // // console.log(`${arr[i]} + ${arr[j]} = ${arg}`)
        indexArr.push([i, j]) // Keep track of pairs used (only for visualization)
        indicesUsed.push(i, j) // Keep track of indices used
        count = count + i + j // Add indices together and keep track
        break;
      }
    }
  }  

  console.log(indicesUsed)
  console.log(indexArr)
  console.log(count)
  return count
}

pairwise([1,4,2,3,0,5], 7);
pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([1, 1, 1], 2)