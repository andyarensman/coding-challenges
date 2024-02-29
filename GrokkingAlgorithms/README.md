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

### Recursion

When a function calls itself.

This:

```python
def look_for_key(main_box):
  pile = main_box.make_a_pile_to_look_through()
  while pile is not empty:
    box = pile.grab_a_box()
    for item in box:
      if item.is_a_box():
        pile.append(item)
      elif item.is_a_key():
        print “found the key!”
```

vs this:

```python
def look_for_key(box):
  for item in box:
    if item.is_a_box():
      look_for_key(item)
    elif item.is_a_key():
      print “found the key!”
```

Recursion is used when it makes the solution clearer. “Loops may achieve a performance gain for your program. Recursion may achieve a performance gain for your programmer. Choose which is more important in your situation!”

### Base Case and Recursive Case

Every recursive function has a base case and a recursive case. The base case is what prevents the function from looping forever.

### The Stack

Push = add to top
Pop = remove from top and read it

The call stack is how your computer keeps track of what's happening in your function. It remembers what happened and won't finish until the top part is done.

When you call a function from another function, the calling function is paused in a partially completed state.

```python
def fact(x):
  if x == 1:
    return 1
  else:
    return x * fact(x-1)
```

Each call has its own copy of x. As it goes down, it gets smaller, then comes back up to do the multiplication with previous versions of x.

Using the stack is convenient, but there’s a cost: saving all that info can take up a lot of memory. Each of those function calls takes up some memory, and when your stack is too tall, that means your computer is saving information for many function calls. At that point, you have two options:

- You can rewrite your code to use a loop instead.
- You can use something called tail recursion. That’s an advanced recursion topic that is out of the scope of this book. It’s also only supported by some languages, not all.

## Quicksort

p51
