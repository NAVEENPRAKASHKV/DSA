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
  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  printReverse(current = this.head) {
    if (current === null) return;
    this.printReverse(current.next);
    console.log(current.value);
  }
  push(value) {
    if (value === null || value === undefined) return undefined;
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
    if (!this.head) return undefined; // If the list is empty, return undefined
    let current = this.head;
    let pre = null;

    // Traverse to the last node
    while (current.next) {
      pre = current;
      current = current.next;
    }

    // Handle the case for a single-node list
    if (pre) {
      pre.next = null; // Remove the last node
      this.tail = pre; // Update the tail
    } else {
      this.head = null; // Empty the list
      this.tail = null;
    }

    // Decrement the length safely
    if (this.length > 0) this.length--;

    return current; // Return the removed node
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
  arrayToLl(arr) {
    if (arr.length === 0) return null;

    // Create the first node (head)
    let newNode = new Node(arr[0]);
    this.head = newNode;
    this.tail = newNode; // Tail is the same as head initially
    this.length = 1;

    let current = newNode;

    // Create the rest of the nodes
    for (let i = 1; i < arr.length; i++) {
      let newNode = new Node(arr[i]);
      current.next = newNode;
      current = newNode;
    }

    // After the loop, the last node will be the tail
    this.tail = current;

    return this.head;
  }
  removeDuplicateInSorted() {
    if (!this.head) return;
    let current = this.head;
    while (current && current.next) {
      if (current.value === current.next.value) {
        current.next = current.next.next;
        this.length--;
      } else {
        current = current.next;
      }
    }
  }
  removeMiddle() {
    let slow = this.head;
    let fast = this.head;
    let prev = null;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    if (slow) {
      prev.next = slow.next;
    }
  }
  class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function findKthFromEnd( k) {
    let fast = this.head;
    let slow = this.head;

    // Move the fast pointer k steps ahead
    for (let i = 0; i < k; i++) {
        if (fast === null) {
            return null; // If k is greater than the length of the list
        }
        fast = fast.next;
    }

    // Move both fast and slow pointers until fast reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow; // slow now points to the kth node from the end
}

}

const myLinkedList = new LinkedList(2);

myLinkedList.push(3);
myLinkedList.push(6);
myLinkedList.push(6);
myLinkedList.push(6);
myLinkedList.push(9);
myLinkedList.display();
console.log("..............");
myLinkedList.removeDuplicateInSorted();
myLinkedList.printReverse();
