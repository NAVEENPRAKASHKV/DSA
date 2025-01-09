class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function arrayToLL(arr) {
  if (arr.length === 0) return null;
  const newNode = new Node(arr[0]);
  const head = newNode; // Create the head node
  let current = newNode; // Pointer to build the list
  let length = 1; // Initialize length

  for (let i = 1; i < arr.length; i++) {
    const newNode = new Node(arr[i]); // Create a new node
    current.next = newNode; // Link the current node to the new one
    current = newNode; // Move to the new node
    length++; // Increment length
  }

  console.log("Length of Linked List:", length); // Optional
  return head; // Return the head of the linked list
}

// Create a linked list from an array
const linkedList = arrayToLL(["q", 2, "c", 4, 5]);

// Traverse and print the linked list
let current = linkedList;
while (current) {
  console.log(current.value); // Output: 1, 2, 3, 4, 5
  current = current.next;
}
