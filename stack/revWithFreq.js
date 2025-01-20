/* this is a reversing a string and count the no of characters in the 
 string usngin stack */

function reverseStringWithFrequency(str) {
  const stack = [];
  let revString = "";
  const frequencyObject = {};
  for (let char of str) {
    stack.push(char);
    frequencyObject[char] = (frequencyObject[char] || 0) + 1;
  }
  while (stack.length > 0) {
    revString += stack.pop();
  }
  return { reverseString: revString, frequency: frequencyObject };
}

console.log(reverseStringWithFrequency("naveen prakash k v"));
