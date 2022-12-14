/*
Create a Priority Queue Class

In this challenge you will be creating a Priority Queue. A Priority Queue is a special type of Queue in which items may have additional information which specifies their priority. This could be simply represented with an integer. Item priority will override placement order in determining the sequence items are dequeued. If an item with a higher priority is enqueued after items with lower priority, the higher priority item will be dequeued before all the others.
*/

//! Had issues with the enqueue method - couldn't get a loop to work and had to use fCC's answer. Not sure if it had something to do with the 'this' keyword or what.

function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function(item) {
    let index = this.collection.findIndex(elem => elem[1] > item[1]);
    if (index !== -1) {
      this.collection.splice(index, 0, item);
    } else {
      this.collection.push(item);
    }
  }
  this.dequeue = function() {
    return this.collection.shift()[0];
  }
  this.size = function() {
    return this.collection.length
  }
  this.front = function() {
    return this.collection[0][0]
  }
  this.isEmpty = function() {
    return !this.collection.length
  }
  // Only change code above this line
}