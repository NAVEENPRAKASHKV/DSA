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
function findNonVowelWord(str) {
  let vowelArray = ["a", "e", "i", "o", "u"];
  let words = str.split(" ");
  let NoVowelWord = [];
  for (let word of words) {
    let newWordArr = word.split("");
    let vowel = newWordArr.filter((char) =>
      vowelArray.includes(char.toLowerCase())
    );
    if (vowel.length === 0) NoVowelWord.push(word);
  }
  return NoVowelWord;
}
//swpaing string in the half
function replaceChar(str, n) {
  let strArray = str.split("");
  let length = strArray.length;
  for (let i = 0; i < length / 2; i++) {
    let temp = strArray[i];
    strArray[i] = strArray[length - 1 - i];
    strArray[length - 1 - i] = temp;
  }
  return strArray.join("");
}
//find first non repeating character
function nonRepetingChar(str) {
  let strArray = str.split("");
  let nonRepeatArray = strArray.filter((char, index, arr) => {
    let firstIndex = arr.indexOf(char);
    let lastIndex = arr.lastIndexOf(char);
    if (firstIndex === lastIndex) {
      return char;
    }
  });
  return nonRepeatArray;
}
//finding the substrig
function countSubString(str, substr) {
  let indeces = [];
  let index = str.indexOf(substr);
  while (index !== -1) {
    indeces.push(index);
    index = str.indexOf(substr, index + 1);
  }
  return indeces;
}
// count no of words in the sentense
function countWords(str) {
  let filterArray = str.split(" ").filter((word) => word.length > 0);
  return filterArray.length;
}
// converting a string to title case
function titleCase(str) {
  let arr = str.split(" ");
  let mappedArray = arr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return mappedArray.join(" ");
}

function isAnagram(str1, str2) {}
const result = titleCase("swssshsshsdsssh dsf defdf df df       ");

console.log(result);
