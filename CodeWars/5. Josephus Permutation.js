/*
This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).

Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.

You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.

Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0 to n-1; k will always be >=1.

For example, with an array=[1,2,3,4,5,6,7] and k=3, the function should act this way.

[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
So our final result is:

[3,6,2,7,5,1,4]
*/

//! My solution:

function josephus(items, k) {
  //your code here
  let response = [];
  let clone = [...items];
  let place = k;
  let counter = 0;

  //reset counter
  while (clone.length) {
    while (place <= items.length) {
      //add to response
      response.push(items[place - 1]);

      //remove from clone
      clone.splice(place - 1 - counter, 1);

      //change place
      place += k;

      //change counter to keep track of items removed
      counter++;
    }
    //change place to the next starting point
    place -= items.length;

    //change items to be clone
    items = [...clone];

    //reset counter
    counter = 0;
  }

  return response;
}

//! Didn't understand other solutions
