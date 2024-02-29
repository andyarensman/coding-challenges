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

## Selection Sort

### How Memory Works

It's basically like a giant set of drawers, and each drawer has an address.

### Arrays and Linked Lists

Using an array means all your tasks are stored contiguously (right next to each other) in memory. If you’re out of space and need to move to a new spot in memory every time, adding a new item will be really slow.

With linked lists, your items can be anywhere in memory. Each item stores the address of the next item in the list. A bunch of random memory addresses are linked together. With linked lists, you never have to move your items. A linked list is like saying, “Let’s split up and watch the movie.” If there’s space in memory, you have space for your linked list.

Linked lists are great if you’re going to read all the items one at a time: you can read one item, follow
the address to the next item, and so on. But if you’re going to keep jumping around, linked lists are terrible.

With arrays, you know the address for every item.

Array Reading: O(1) - random access
Array Insertion: O(n)
Array Deletion: O(n)
Lists Reading: O(n) - sequential access
Lists Insertion: O(1)
Lists Deletion: O(1) (only if you know the location, like first or last)

Arrays are good for reading, linked lists are good for insertion and deletion.

### Selection Sort

You go through the the list over and over again, looking for the highest value (or whatever you're sorting by). The runtime is then O(n<sup>2</sup>)

## Recursion

p37
