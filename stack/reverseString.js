function reverseString(str) {
  let stack = [];
  let revString = "";
  for (let char of str) {
    stack.push(char);
  }
  while (stack.length > 0) {
    revString += stack.pop();
  }
  return revString;
}

const result = reverseString("prakash");
console.log(result);
