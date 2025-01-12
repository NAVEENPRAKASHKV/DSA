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
  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  delete(value) {
    let current = this.head;
    let prev = null;
    if (current && current.value === value) {
      this.head = current.next;
      this.current.next = null;
      if (!this.head) {
        this.tail = null;
      }
      this.length--;
      return current;
    }
    while (current) {
      if (current.value === value) {
        prev.next = current.next;
        if ((current = this.tail)) {
          this.tail = prev;
        }
        current.next = null;
        this.length--;
        return current;
      }
      console.log("this value not in list");
    }
  }
}

const linkedList = new LinkedList(10);
linkedList.push(20);
linkedList.push(30);
linkedList.push(40);
linkedList.push(50);
linkedList.push(100);
linkedList.display();
console.log(".........");
linkedList.delete(100);
linkedList.display();
