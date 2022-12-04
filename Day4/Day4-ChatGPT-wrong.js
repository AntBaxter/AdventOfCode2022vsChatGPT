function countFullyContainedPairs(pairs) {
    // Sort the pairs in increasing order by the start of the range
    pairs = pairs.sort((a, b) => a[0] - b[0]);
  
    // Initialize the count to zero
    let count = 0;
  
    // Iterate over the pairs of ranges
    for (let i = 0; i < pairs.length; i++) {
      // Compare the start and end of the ranges
      for (let j = i + 1; j < pairs.length; j++) {
        // If the second range is fully contained by the first range, increment the count
        if (pairs[j][0] >= pairs[i][0] && pairs[j][1] <= pairs[i][1]) {
          count++;
        }
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

  
  // Parse the input
  const input = `
  2-4,6-8
  2-3,4-5
  5-7,7-9
  2-8,3-7
  6-6,4-6
  2-6,4-8
  `;
  const pairs = input
    .trim()
    .split("\n")
    .map(line => line.split(",").map(range => range.split("-")))
    .flat()
    .map(range => range.map(Number));
  
  // Solve the problem
  console.log(countFullyContainedPairs(pairs));