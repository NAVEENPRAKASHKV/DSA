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
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // Point the current tail's next to the new node
      this.tail = newNode; // Update the tail to the new node
    }
    this.length++; // Increment the list length
    return this; // Return the linked list for chaining
  }
  pop() {
    if (!this.head) return undefined; // Check if the list is empty

    let pre = this.head;
    let temp = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre; // Update the tail to the second last node
    this.tail.next = null; // Remove reference to the last node
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null; // Reset head and tail for an empty list
    }

    return temp; // Return the removed node
  }
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // Point the new node's next to the current head
      this.head = newNode; // Update the head to the new node
    }

    this.length++;
    return this; // Return the linked list for chaining
  }
  shift() {
    if (!this.head) return undefined; // Handle empty list case

    let temp = this.head; // Store the current head
    this.head = this.head.next; // Move the head to the next node
    temp.next = null;
    this.length--; // Decrease the length of the list

    if (this.length === 0) {
      this.tail = null; // Reset the tail if the list is now empty
    }

    return temp; // Return the removed node
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    if (index < 0 || index > this.length) {
      return false; // Invalid index
    }

    let temp = this.head;
    let pre = null;

    for (let i = 0; i < index; i++) {
      pre = temp;
      temp = temp.next;
    }

    const newNode = new Node(value);
    pre.next = newNode;
    newNode.next = temp;

    this.length++; // Increment length after insertion
    return true; // Return true to indicate successful insertion
  }
  remove(index) {
    // Check if the index is out of bounds
    if (index < 0 || index >= this.length) return undefined;

    // Remove the first node
    if (index === 0) return this.shift();

    // Remove the last node
    if (index === this.length - 1) return this.pop();

    // Traverse to the node to remove
    let temp = this.head;
    let pre = null;

    for (let i = 0; i < index; i++) {
      pre = temp; // Keep track of the previous node
      temp = temp.next; // Move to the next node
    }

    // Remove the node by skipping it
    pre.next = temp.next;
    temp.next = null;

    // Decrease the length of the list
    this.length--;

    // Return the removed node
    return temp;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prev = null;
    let next = temp.next;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

const myLinkedList = new LinkedList(20);

myLinkedList.push(3);
myLinkedList.push(6);
myLinkedList.push(9);
myLinkedList.insert(1, 100);
console.log(myLinkedList);
console.log(myLinkedList.reverse());
