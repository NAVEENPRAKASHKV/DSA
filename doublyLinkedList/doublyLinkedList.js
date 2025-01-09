class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      //empty linked list
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail; //only this line of code change with singly linked list and doubly linked list
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const myDll = new DoublyLinkedList(5);

myDll.display();
