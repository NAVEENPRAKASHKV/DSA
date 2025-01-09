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
  //end method
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
  //end method
  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    temp.prev = null;
    temp.next = null;
    this.length--;

    return temp;
  }
}

const myDll = new DoublyLinkedList(3);

console.log(myDll);
myDll.display();
