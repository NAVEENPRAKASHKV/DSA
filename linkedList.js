class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    // to push element to the linked list
    const newNode = new Node(value);
    if (!this.head) {
      // if no node is present
      this.head = newNode;
      this.tail = newNode;
    } else {
      // adding node to the linked list
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let pre = this.head;
    let temp = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
  }
}

const myLinkedList = new LinkedList(5);
console.log(myLinkedList);
myLinkedList.pop();

console.log(myLinkedList);
