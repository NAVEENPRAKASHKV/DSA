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
}

// Example Usage
const myLinkedList = new LinkedList(5);
myLinkedList.push(10); // Add 10 to the end
console.log(myLinkedList);

myLinkedList.pop(); // Remove the last node
console.log(myLinkedList);

myLinkedList.unshift(3); // Add 3 to the beginning
console.log(myLinkedList);
