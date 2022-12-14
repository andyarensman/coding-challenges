class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    if (this.queue[this.read] && this.read === this.write) {
      return null
    }
    this.queue[this.write] = item
    if (this.write === this.max) {
      this.write = 0
    } else {
      this.write++
    }
    return item
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
   
    let item = this.queue[this.read]
    if (item === null) {
      return item
    }
    this.queue[this.read] = null
    if (this.read === this.max) {
      this.read = 0
    } else {
      this.read++
    }
    return item
    // Only change code above this line
  }
}