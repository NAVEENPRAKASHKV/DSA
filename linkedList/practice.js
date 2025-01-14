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
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  delete(value) {
    let current = this.head;
    let pre = null;
    while (current.next) {
      if (current.value === value) break;
      pre = current;
      current = current.next;
    }
    if (current.value !== value) return undefined;
    if (this.head === current) return this.shift();
    if (this.tail === current) return this.pop();
    pre.next = current.next;
    current.next === null;
    this.length--;
    return current;
  }
  deleteValue(value) {
    if (!this.head) return undefined;
    let current = this.head;
    let pre = null;
    if (current.value === value) {
      this.head = this.head.next;
      current.next = null;
      if (current === this.tail) {
        this.tail = null;
      }
      this.length--;
      return current;
    }
    while (current) {
      if (current.value === value) {
        pre.next = current.next;
        current.next = null;
        if (current === this.tail) {
          this.tail = pre;
        }
        this.length--;
        return current;
      }
      pre = current;
      current = current.next;
    }
    console.log("no element found");
    return null;
  }
  insertBefore(value, newValue) {
    if (!this.head) return null;
    let newNode = new Node(newValue);
    let current = this.head;
    let prev = null;
    if (current.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    while (current) {
      if (current.value === value) {
        prev.next = newNode;
        newNode.next = current;
        this.length++;
        return this;
      }

      prev = current;
      current = current.next;
    }
    console.log("no value found");
    return null;
  }
  insertAfter(value, newValue) {
    if (!this.head) return null;
    const newNode = new Node(newValue);
    let current = this.head;

    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        if (current === this.tail) {
          this.tail = newNode;
        }

        this.length++;
        return this;
      }
      current = current.next;
    }
    console.log("insert after");
    return null;
  }
  middle() {
    if (!this.head) return null;
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.value;
  }
  reversed() {
    if (!this.head) return null;
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
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
}

// let linkedList = new LinkedList(5);
// linkedList.push(14);
// linkedList.push(15);
// linkedList.push(16);
// linkedList.push(77);

// linkedList.display();
// console.log("the middile is", linkedList.middle());
// console.log(linkedList.reversed());

// linkedList.display();

//array to linked list

let arr1 = [1, 20, 3, 4, 5];
let linkedList = new LinkedList();
let current = linkedList.arrayToLl(arr1);
console.log(current);
while (current) {
  console.log(current.value);
  current = current.next;
}
