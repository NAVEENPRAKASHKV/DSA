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
  // end method
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
  // end method
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
  // end method
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return temp;
  }
  // end method
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  // end method
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }

    temp.next = 0;
    temp.prev = 0;
    return temp;
  }
  // end method
  set(index, value) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    temp.value = value;
    return this;
  }
  inset(index, value) {
    // Ensure valid index (index should be >= 0 and < this.length)
    if (index < 0 || index > this.length) return false;

    // Handle inserting at the beginning (index 0)
    if (index === 0) return this.unshift(value);

    // Handle inserting at the end (last index)
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    let temp = this.head;

    // Traverse the list to the desired index
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    // Get the previous node and insert the new node
    let prev = temp.prev;
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = temp;
    temp.prev = newNode;

    return true;
  }
  // end method
}

const myDll = new DoublyLinkedList(3);
myDll.unshift(45);
myDll.unshift(29);
myDll.unshift(44);
myDll.unshift(57);
myDll.set(4, 200);
myDll.display();

console.log("..........");
myDll.display();
