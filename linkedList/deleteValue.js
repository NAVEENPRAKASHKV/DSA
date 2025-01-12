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
  //end method
  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  //end method
  delete(value) {
    let current = this.head;
    let pre = null;

    // Handle deletion of the head node
    if (current && current.value === value) {
      this.head = current.next;
      current.next = null;

      // If the list becomes empty, set tail to null
      if (!this.head) {
        this.tail = null;
      }
      this.length--;
      return;
    }

    // Handle deletion of non-head nodes
    while (current) {
      if (current.value === value) {
        pre.next = current.next;

        // If the node to be deleted is the tail, update the tail
        if (current === this.tail) {
          this.tail = pre;
        }

        current.next = null; // Disconnect the node
        this.length--;
        return;
      }
      pre = current;
      current = current.next;
    }

    // If the value is not found
    console.log("Node with value " + value + " not found.");
  }
  //end method
  insertBefore(value, newValue) {
    let current = this.head;
    let prev = null;
    const newNode = new Node(newValue);

    // Handle empty list case
    if (!current) {
      console.log("The list is empty.");
      return this;
    }

    // If the node to insert before is the head node
    if (current.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }

    // Traverse the list to find the node with the specified value
    while (current) {
      if (current.value === value) {
        prev.next = newNode;
        newNode.next = current;
        this.length++;
        return this; // Return the list itself for method chaining
      }
      prev = current;
      current = current.next;
    }

    // If no node with the value was found
    console.log("Node with value " + value + " not found.");
    return this; // Return the list even if insertion was unsuccessful
  }
  //end method
  insertAfter(value, newValue) {
    let current = this.head;
    const newNode = new Node(newValue);

    // Handle empty list case
    if (!current) {
      console.log("The list is empty.");
      return this;
    }

    // Traverse the list to find the node with the specified value
    while (current) {
      if (current.value === value) {
        newNode.next = current.next; // Link the new node to the next node
        current.next = newNode; // Link the current node to the new node

        // Update tail if inserting at the end
        if (!newNode.next) {
          this.tail = newNode;
        }

        this.length++; // Increment length as a node is added
        return this; // Return the list itself for method chaining
      }
      current = current.next; // Move to the next node
    }

    // If no node with the value was found
    console.log("Node with value " + value + " not found.");
    return this; // Return the list even if insertion was unsuccessful
  }
  //end method
}

const linkedList = new LinkedList(10);
linkedList.push(20);
linkedList.push(30);
linkedList.push(40);
linkedList.push(50);
linkedList.push(100);
linkedList.insertAfter(100, 1);
linkedList.display();
