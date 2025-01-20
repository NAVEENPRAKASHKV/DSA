class Queue {
  constructor() {
    this.item = [];
  }
  isEmpty() {
    return this.item.length === 0;
  }
  enqueue(value) {
    this.item.push(value);
    return this;
  }
  dequeue() {
    return this.isEmpty() ? undefined : this.item.shift();
  }
  peek() {
    return this.item.length === 0 ? undefined : this.item[0];
  }
  display() {
    console.log(this.item.join("-->"));
  }
}

const queue = new Queue();
queue.enqueue(9);
queue.enqueue(56);
queue.enqueue(68);
queue.display();
console.log(queue.dequeue());
queue.display();
