function findPreviousUnique(str, uniqueLength) {
    for (let i = uniqueLength; i < str.length; i++) {
      // Check if the previous four characters are all unique
      if (new Set(str.substring(i - uniqueLength, i)).size === uniqueLength) {
        return i;
      }
    }
  
    // If no such index was found, return -1
    return -1;
  }

const fs = require('fs');
const input = fs.readFileSync('Day6/input.txt', 'utf8');

console.log("Question a:"+findPreviousUnique(input,4));
console.log("Question b:"+findPreviousUnique(input,14));