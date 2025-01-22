class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value); // Create a new node with the given value
    if (this.root === null) {
      // If the tree is empty
      this.root = newNode; // Set the new node as the root
      return this; // Return the tree
    }
    let temp = this.root; // Start from the root node
    while (true) {
      if (newNode.value === temp.value) return undefined; // Prevent duplicates
      if (newNode.value < temp.value) {
        // Move to the left subtree
        if (temp.left === null) {
          // Found an empty spot
          temp.left = newNode; // Insert the new node
          return this; // Return the tree
        }
        temp = temp.left; // Move to the next left node
      } else {
        // Move to the right subtree
        if (temp.right === null) {
          // Found an empty spot
          temp.right = newNode; // Insert the new node
          return this; // Return the tree
        }
        temp = temp.right; // Move to the next right node
      }
    }
  }
  contain(value) {
    if (this.root === null) return false; // Empty tree
    let temp = this.root; // Start from the root
    while (temp) {
      if (value < temp.value) {
        temp = temp.left; // Move to the left subtree
      } else if (value > temp.value) {
        temp = temp.right; // Move to the right subtree
      } else {
        return true; // Value matches the current node
      }
    }
    return false; // Value not found in the tree
  }
}

const bst = new BST();
bst.insert(34);
bst.insert(35);
bst.insert(36);
console.log(bst);
console.log(bst.contain(30));
