// this is checking palindrome using stack

function isPalindrome(str) {
  const stack = [];
  let revString = "";
  for (let char of str) {
    stack.push(char);
  }

  while (stack.length > 0) {
    revString += stack.pop();
  }

  return str === revString;
}

console.log(isPalindrome("malayalam"));
