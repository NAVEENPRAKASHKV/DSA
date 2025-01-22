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
// to check the anagram
function isAnagram(str1, str2) {
  const str1Sorted = str1
    .replace(/\s+/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  const str2Sorted = str2
    .replace(/\s+/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  return str1Sorted === str2Sorted ? true : false;
}
// find longest word in the sentense
function largestWord(str) {
  let strArray = str.split(" ");
  let long = strArray.reduce(
    (longest, word) => (longest.length < word.length ? word : longest),
    ""
  );
  return long;
}
// replace all occurace of a character
function replaceAllOccurance(str, target, replacement) {
  return str.split(target).join(replacement);
}
//remove all digit from the string
function removeDigit(str) {
  return str.replace(/\d+/g, "");
}
//capitalize first letter of a sentence
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
// reverse setense by word by word
function reverseSetByWord(str) {
  return str
    .split(" ") // Split the string into an array of words
    .map((word) => word.split("").reverse().join("")) // Reverse each word
    .join(" "); // Join reversed words with spaces
}

console.log(reverseSetByWord("this is naveen"));

const result = largestWord("listen343434 sil3434ent ereeeeee34344");

console.log(result);
