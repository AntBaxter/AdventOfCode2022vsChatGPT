const SHAPES = {
    'A': 'Rock',
    'B': 'Paper',
    'C': 'Scissors',
    'X': 'Rock',
    'Y': 'Paper',
    'Z': 'Scissors'
}

const calcScore = (shape1, shape2) => {
    let score = 0;
    switch (shape1) {
        case 'Rock':
            score = 1;
            break;
        case 'Paper':
            score = 2;
            break;
        case 'Scissors':
            score = 3;
            break;
    }

    if (shape1 === shape2) {
        score += 3;
    } else if ((shape1 === 'Rock' && shape2 === 'Scissors') || (shape1 === 'Paper' && shape2 === 'Rock') || (shape1 === 'Scissors' && shape2 === 'Paper')) {
        score += 6;
    }

    return score;
}

const fs = require('fs');

let totalScore = 0;

fs.readFile('Day2/input.txt', (err, data) => {
    if (err) throw err;

    const input = data.toString();
    const lines = input.split('\n');
    lines.forEach((line) => {
        // Split the line into the two shapes
        const [shape1, shape2] = line.split(' ');
        // Look up the name of the shape using the dictionary
        const shape1Name = SHAPES[shape1];
        const shape2Name = SHAPES[shape2];
        // Calculate the score for the round
        const roundScore = calcScore(shape1Name, shape2Name);
        // Add the score to the total score
        totalScore += roundScore;
    });

    console.log(totalScore);
});


// Wish I could include the chat log but it didn't do that good a job on this one. 
// I spent some time arguing with it to get the above code which I don't think is that great. 