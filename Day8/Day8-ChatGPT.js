// Parse the input to create a grid of tree heights
const fs = require('fs');
const grid = fs.readFileSync('Day8/sane.txt', 'utf8').split('\n').map(x => x.split(''));

// Count the number of visible trees in each row and column
let visibleTrees = 0;
for (let i = 0; i < grid.length; i++) {
  // Count the number of visible trees in each row
  let maxHeight = -1;
  for (let j = 0; j < grid[i].length; j++) {
    const height = parseInt(grid[i][j]);
    if (height > maxHeight) {
      visibleTrees++;
      maxHeight = height;
    }
  }

  // Count the number of visible trees in each column
  maxHeight = -1;
  for (let j = 0; j < grid[i].length; j++) {
    const height = parseInt(grid[j][i]);
    if (height > maxHeight) {
      visibleTrees++;
      maxHeight = height;
    }
  }
}

// Output the total number of visible trees
console.log(visibleTrees);

// no idea what GPT is doing here, but while it gets the right answer for the sample it doesn't for the main input.
// I think it is only going to get trees visible from left or top maybe? Meh.