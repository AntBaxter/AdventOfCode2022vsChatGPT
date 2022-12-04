function countFullyContainedPairs(pairs) {
    // Initialize the count to zero
    let count = 0;
  
    // Iterate over the pairs of ranges
    for (let i = 0; i < pairs.length; i++) {
      // Compare the start and end of the ranges in the pair
      if (pairs[i][0][0] >= pairs[i][1][0] && pairs[i][0][1] <= pairs[i][1][1]) {
        // If the second range is fully contained by the first range, increment the count
        count++;
      } else if (pairs[i][1][0] >= pairs[i][0][0] && pairs[i][1][1] <= pairs[i][0][1]) {
        // If the first range is fully contained by the second range, increment the count
        count++;
      }
    }
  
    // Return the count
    return count;
  }
  
  function countOverlappingPairs(pairs) {
    // Initialize the count to zero
    let count = 0;
  
    // Iterate over the pairs of ranges
    for (let i = 0; i < pairs.length; i++) {
      // Compare the start and end of the ranges in the pair
      if (pairs[i][0][0] <= pairs[i][1][1] && pairs[i][0][1] >= pairs[i][1][0]) {
        // If the ranges in the pair overlap, increment the count
        count++;
      }
    }
  
    // Return the count
    return count;
  }
  

  const fs = require('fs');
  const input = fs.readFileSync('Day4/input.txt', 'utf8').split('\n');
  
  const pairs = input
    .map(line => line.split(",").map(range => range.split("-")))
    .map(pair => pair.map(range => range.map(Number)));
  
  console.log(countFullyContainedPairs(pairs));
console.log(countOverlappingPairs(pairs));
