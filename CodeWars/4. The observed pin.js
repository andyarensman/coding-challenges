/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

Detective, we are counting on you!
*/

//! Super proud that I was able to solve this one using recursion:

function helper(num) {
  let options;
  switch (num) {
    case "1":
      options = "124";
      break;
    case "2":
      options = "1235";
      break;
    case "3":
      options = "236";
      break;
    case "4":
      options = "1457";
      break;
    case "5":
      options = "24568";
      break;
    case "6":
      options = "3569";
      break;
    case "7":
      options = "478";
      break;
    case "8":
      options = "57890";
      break;
    case "9":
      options = "689";
      break;
    case "0":
      options = "80";
      break;
  }
  return options;
}

function getPINs(observed) {
  let response = [];
  let pinLength = observed.length;

  function recursive(previousValues, newValue, newIndex) {
    let options = helper(newValue);

    if (previousValues.length === pinLength - 1) {
      //loop through final digit and add everything I have so far
      for (let i = 0; i < options.length; i++) {
        response.push(previousValues.concat(options[i]));
      }
    } else {
      for (let i = 0; i < options.length; i++) {
        recursive(
          previousValues.concat(options[i]),
          observed[newIndex],
          newIndex + 1
        );
      }
    }
  }

  recursive("", observed[0], 1);

  return response;
}
