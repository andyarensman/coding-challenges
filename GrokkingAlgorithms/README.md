# Grokking Algorithms Book Notes

https://github.com/egonschiele/grokking_algorithms

See Anki flash cards for terms to study.

## Introduction to Algorithms

### Binary Search

Binary Search is a search algorithm with an input of a sorted list of elements that returns the location of an element you're searching for or null if not found.

With binary search, you guess the middle number and eliminate half the remaining numbers every time.

In general, for any list of <i>n</i>, binary search will take <i>log<sub>2</sub>n</i> steps to run in the worst case, whereas simple search will take <i>n</i> steps.

log<sub>10</sub>100 is like asking, “How many 10s do we multiply together to get 100?” The answer is 2: 10 × 10. So log<sub>10</sub>100 = 2. Logs are the flip of exponentials. When talking about Big O notation in the book, log will always refer to log<sub>2</sub>, so it's "How many 2s do we multiple to get to X?"

pg 8
