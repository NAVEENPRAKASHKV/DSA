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
}

const myLinkedList = new LinkedList(3);

console.log(myLinkedList);
