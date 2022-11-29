/*
Inventory Update

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
  var returnArr = []

  for (var i = 0; i < arr2.length; i++) {
    var newItem = true
    // updates value
    for (var j = 0; j < arr1.length; j++) {
      if (arr2[i][1] === arr1[j][1]) {
        newItem = false
        var newNum = arr2[i][0] + arr1[j][0]
        returnArr.push([newNum, arr2[i][1]])
        arr1.splice(j, 1)
        break;
      }
    }

    // adds new item
    if (newItem === true) {
      returnArr.push(arr2[i])
    }
  }
  
  // adds remaining items
  returnArr.push(...arr1)

  //sort alphabetically
  returnArr.sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
    return 0;
  })
  
  return returnArr;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));

// Example result:
/*
[
  [ 88, 'Bowling Ball' ],
  [ 2, 'Dirty Sock' ],
  [ 3, 'Hair Pin' ],
  [ 3, 'Half-Eaten Apple' ],
  [ 5, 'Microphone' ],
  [ 7, 'Toothpaste' ]
]
*/