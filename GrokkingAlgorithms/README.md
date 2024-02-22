# Grokking Algorithms Book Notes

https://github.com/egonschiele/grokking_algorithms

See Anki flash cards for terms to study.

## Introduction to Algorithms

### Binary Search

Binary Search is a search algorithm with an input of a sorted list of elements that returns the location of an element you're searching for or null if not found.

With binary search, you guess the middle number and eliminate half the remaining numbers every time.

In general, for any list of <i>n</i>, binary search will take <i>log<sub>2</sub>n</i> steps to run in the worst case, whereas simple search will take <i>n</i> steps.

log<sub>10</sub>100 is like asking, “How many 10s do we multiply together to get 100?” The answer is 2: 10 × 10. So log<sub>10</sub>100 = 2. Logs are the flip of exponentials. When talking about Big O notation in the book, log will always refer to log<sub>2</sub>, so it's "How many 2s do we multiple to get to X?"

In the algorithm, you keep track of what part of the array you have to search through. At the beginning, this is the entire array: `low = 0, high = length(list) - 1`. Each time you check the middle element: `mid = (low + high) / 2, guess = list[mid]` (mid is rounded down in Python). If the guess is too low, you update accordingly: `low = mid + 1`. If the guess is too high, you update high: `high = mid - 1`. Here's the full code:

```js
const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};
```

This search uses logarithmic time as oppose to a simple search that would have linear time. O(logn)

### Big O Notation

Big O notation is special notation that tells you how fast an algorithm is. It tells you about the worst-case scenario.

Common Run Times:

- Simple search is O(n).
- Binary search is O(logn) or log time.
- O(n \* log n). Example: A fast sorting algorithm, like quicksort.
- O(n2). Example: A slow sorting algorithm, like selection sort.
- O(n!). Example: A really slow algorithm, like the traveling salesperson.

pg21
