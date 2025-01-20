class QueueFromStack {
  constructor() {
    this.stack1 = []; // Stack used for enqueue
    this.stack2 = []; // Stack used for dequeue
  }

  // Enqueue operation: Add to stack1
  enqueue(value) {
    this.stack1.push(value);
  }

  // Dequeue operation: Remove from stack2, or transfer from stack1 to stack2 if stack2 is empty
  dequeue() {
    // Return undefined if both stacks are empty
    if (this.stack1.length === 0 && this.stack2.length === 0) {
      return undefined;
    }

    // Transfer elements from stack1 to stack2 if stack2 is empty
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    // Pop the front element from stack2 (dequeue operation)
    return this.stack2.pop();
  }
}
