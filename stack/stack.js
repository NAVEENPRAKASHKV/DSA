class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  pop() {
    if (this.length === 0) return undefined;
    else {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) this.top = newNode;
    else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  display() {
    let current = this.top;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  //   accessing middle element in stack
  middleElement() {
    if (this.length === 0) return undefined;
    let slow = this.top;
    let fast = this.top;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}

let stack = new Stack(12);
stack.push(9);
stack.push(10);
stack.display();
console.log(stack.middleElement());
