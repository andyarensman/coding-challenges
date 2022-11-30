/*
No Repeats Please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

*/

/* This answer works, but I copied the code for Heap's Algorithm - need to review this to understand it myself. There may be a way to make it more efficient by putting the code that removes duplicates inside of Heap's somehow. I could have also used regular expressions instead of checking if the next letter was the same or not. */

function permAlone(str) {
  var strArr = [...str]

  // Heap's Algorithm
  const getPermutations = arr => {
    const output = [];
  
    const swapInPlace = (arrToSwap, indexA, indexB) => {
      const temp = arrToSwap[indexA];
      arrToSwap[indexA] = arrToSwap[indexB];
      arrToSwap[indexB] = temp;
    };
  
    const generate = (n, heapArr) => {
      if (n === 1) {
        output.push(heapArr.slice());
        return;
      }
  
      generate(n - 1, heapArr);
  
      for (let i = 0; i < n - 1; i++) {
        if (n % 2 === 0) {
          swapInPlace(heapArr, i, n - 1);
        } else {
          swapInPlace(heapArr, 0, n - 1);
        }
  
        generate(n - 1, heapArr);
      }
    };
  
    generate(arr.length, arr.slice());
  
    return output;
  };
  
  var heapsArr = getPermutations(strArr) //End of Heap's Algorithm
  
  var nonRepeatArr = []
  // Iterate through every array and remove any that have repeated letters
  for (var i = 0; i < heapsArr.length; i++) {
    var isRepeat = false
    for (var j = 0; j < heapsArr[i].length - 1; j++) { //inside individual arrays
      if (heapsArr[i][j] === heapsArr[i][j + 1]) {
        isRepeat = true
        break;
      }
    }
    if (isRepeat === false) {
      nonRepeatArr.push(heapsArr[i])
    }
  }

  return nonRepeatArr.length

}

console.log(permAlone('abcdefa'));


