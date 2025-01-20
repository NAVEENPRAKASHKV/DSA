class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    if (this.isEmpty()) return undefined;
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  display() {
    console.log(this.items.join("-->"));
  }
}

const stack = new Stack();
stack.push(34);
stack.push(50);
stack.display();
stack.pop();
stack.display();
