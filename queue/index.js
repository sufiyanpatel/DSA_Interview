class Queue {
  constructor() {
    this.queue = [];
  }

  // insert data into queue
  enqueue(data) {
    return this.queue.push(data);
  }

  // remove data from queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift();
  }

  // check if queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // peek(): Returns the element at the front of the queue(i.e 0th position) without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  clear() {
    return (this.queue = []);
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + "\n";
    }
    return str;
  }
}

// USAGE:
let myQueue = new Queue();
myQueue.enqueue(20)
myQueue.enqueue(30)
myQueue.enqueue(32)
myQueue.enqueue(40)
myQueue.dequeue()
console.log(myQueue.peek());
console.log(myQueue.printQueue());
