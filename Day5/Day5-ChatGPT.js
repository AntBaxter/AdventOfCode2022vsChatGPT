// Define a function to move a number of crates from one stack to another
function moveCrates(numCrates, fromStack, toStack) {
    // Loop through the number of crates to be moved
    for (let i = 0; i < numCrates; i++) {
      // Remove the top crate from the "from" stack and add it to the "to" stack
      toStack.push(fromStack.pop());
    }
  }
  
  // Define the initial stacks of crates
  let stack1 = ['Z', 'N'];
  let stack2 = ['M', 'C', 'D'];
  let stack3 = ['P'];
  
  // Define the rearrangement procedure
  let steps = [  {numCrates: 1, fromStack: 2, toStack: 1},  {numCrates: 3, fromStack: 1, toStack: 3},  {numCrates: 2, fromStack: 2, toStack: 1},  {numCrates: 1, fromStack: 1, toStack: 2}];
  
  // Loop through each step of the procedure
  for (let step of steps) {
    // Get the "from" and "to" stacks for this step
    let fromStack = step.fromStack === 1 ? stack1 : (step.fromStack === 2 ? stack2 : stack3);
    let toStack = step.toStack === 1 ? stack1 : (step.toStack === 2 ? stack2 : stack3);
  
    // Move the specified number of crates from the "from" stack to the "to" stack
    moveCrates(step.numCrates, fromStack, toStack);
  }
  
  // Print the top crate of each stack after the rearrangement is complete
  console.log(stack1[stack1.length - 1]);
  console.log(stack2[stack2.length - 1]);
  console.log(stack3[stack3.length - 1]);