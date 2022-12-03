const fs = require('fs');

function findCommonItems(rucksacks) {
    // The sum of the priorities of the common items
    let totalPriority = 0;
  
    // Loop through each rucksack
    for (const rucksack of rucksacks) {
      // Split the rucksack into its two compartments
      const firstCompartment = rucksack.slice(0, rucksack.length / 2);
      const secondCompartment = rucksack.slice(rucksack.length / 2);
  
      // Use a Set to keep track of the items that have already been added
      // to the total priority.
      const processedItems = new Set();
  
      // Loop through each item in the first compartment and check if it
      // appears in the second compartment. If it does, add its priority
      // to the totalPriority.
      for (const item of firstCompartment) {
        if (secondCompartment.includes(item) && !processedItems.has(item)) {
          // Calculate the priority of the item
          const priority = item.charCodeAt(0) - (item >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0)) + (item >= 'a' ? 1 : 27)
  
          // Add the priority to the total
          totalPriority += priority;
  
          // Add the item to the set of processed items
          processedItems.add(item);
        }
      }
    }
  
    // Return the total priority
    return totalPriority;
  }

  
  function findCommonItems2(rucksacks) {
    // The sum of the priorities of the common items
    let totalPriority = 0;
  
    // Loop through each group of three rucksacks
    for (let i = 0; i < rucksacks.length; i += 3) {

  
      // Loop through each item in the first rucksack and check if it
      // appears in the second and third rucksacks. If it does, add its priority
      // to the totalPriority.
      for (const item of rucksacks[i]) {
        if (rucksacks[i + 1].includes(item) && rucksacks[i + 2].includes(item)) {
          // Calculate the priority of the item
          const priority = item.charCodeAt(0) - (item >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0)) + (item >= 'a' ? 1 : 27);
  
          // Add the priority to the total
          totalPriority += priority;
  
        }
      }
    }
}

// Read the input file and split it into an array of rucksacks
const input = fs.readFileSync('Day3/sane.txt', 'utf8');
const rucksacks = input.split('\n').filter(s => s.length > 0);

// Print the result
console.log(findCommonItems(rucksacks));
console.log(findCommonItems2(rucksacks));



// Read the input file and split it into an array of rucksacks


