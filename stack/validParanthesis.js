// function to check the invalid count of the paranthesis and also the count of unpairedparanthesis

function isValidParanthesis(str) {
  const paramsObj = { ")": "(", "]": "[", "}": "{" };
  const stack = [];
  for (let char of str) {
    if (char in paramsObj) {
      // If it's a closing parenthesis
      let lastElemnt = stack.length ? stack.pop() : "#";
      if (paramsObj[char] !== lastElemnt) {
        return false;
      }
    } else {
      stack.push(char); // Push opening parenthesis onto the stack
    }
  }
  return stack.length === 0;
}

console.log(isValidParanthesis("()[]{}"));

function inValidCount(str) {
  const stack = [];
  const mapping = { "}": "{", ")": "(", "]": "[" };
  let invalidCount = 0;

  for (let char of str) {
    if (char in mapping) {
      let lastElement = stack.length ? stack.pop() : "#"; // Pop or use a placeholder
      if (mapping[char] !== lastElement) {
        invalidCount++; // Count invalid pair
      }
    } else {
      stack.push(char); // Push opening parentheses onto the stack
    }
  }
  invalidCount += stack.length; // Add unmatched opening parentheses to invalid count
  return { isValid: stack.length === 0, invalidCount };
}

// Example usage
console.log(inValidCount("()[]{}")); // Output: { isValid: true, invalidCount: 0 }
console.log(inValidCount("(]")); // Output: { isValid: false, invalidCount: 2 }
console.log(inValidCount("([)]")); // Output: { isValid: false, invalidCount: 2 }
console.log(inValidCount("{[]}")); // Output: { isValid: true, invalidCount: 0 }
