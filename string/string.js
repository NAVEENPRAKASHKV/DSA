let str = "naveen praksh kv how are you";

// reversing a string
function reverseString(str) {
  let reverseStr = str.split("").reverse().join("");
  return reverseStr;
}
// Check if a String is a Palindrome
function isPalindrome(str) {
  let cleanedStr = str.replace(/\s+ /g, "").toLowerCase();
  let reverse = cleanedStr.split("").reverse().join("");
  if (reverse === str) {
    console.log("it is palindrome");
  } else {
    console.log("it is not palindrome");
  }
}
//count vowel or not
function countVowel(str) {
  let vowelArr = ["a", "e", "i", "o", "u"];
  let strArray = str.split("");
  let filtered = strArray.filter((char) =>
    vowelArr.includes(char.toLowerCase())
  );
  return filtered.length;
}
//replace vowel with anothe value
function replaceVowel(str) {
  let vowelArray = ["a", "e", "i", "o", "u"];
  let strArray = str.split("");
  let mapedArray = strArray.map((char) => {
    if (vowelArray.includes(char.toLowerCase())) {
      return "1";
    } else return char;
  });
  return mapedArray.join("");
}
//word having no vowel in the sentence

const result = replaceVowel("noukri");

console.log(result);
