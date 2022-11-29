/* 
Find the Symmetric Difference

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
*/

function sym(...args) {
  let returnArr = []

  console.log(args.length)
  
  // helper function
  const helper = (arrA, arrB) => {
    let helperArr = []
    // A against B
    for (let i = 0; i < arrA.length; i++) {
      if (!arrB.includes(arrA[i]) && !helperArr.includes(arrA[i])) {
        helperArr.push(arrA[i])
      }
    }
    // B against A
    for (let i = 0; i < arrB.length; i++) {
      if (!arrA.includes(arrB[i]) && !helperArr.includes(arrB[i])) {
        helperArr.push(arrB[i])
      }
    }
    
    return helperArr
  }

  // first cycle
  returnArr = helper(args[0], args[1])

  // other cycles
  for (let i = args.length - 1; i > 1; i--) {
    let newArr = returnArr
    returnArr = helper(newArr, args[i])
  }

  return returnArr
}

console.log(sym([1, 2, 3], [5, 2, 1, 4])); // returns [3, 4, 5]
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])) // returns [1, 4, 5]