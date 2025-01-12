class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value = null) {
    if (value !== null) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }
  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let pre = null;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    if (pre) {
      pre.next = null;
      this.tail = pre;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return current;
  }
}

let linkedList = new LinkedList(9);
linkedList.push(10);
linkedList.push(14);
console.log(linkedList.pop());
console.log(linkedList.pop());
