const SHAPES = {
    'A': 'X',
    'B': 'Y',
    'C': 'Z'
}

const calcScore = (shape1, shape2, outcome) => {
    let score = 0;
    switch (shape1) {
        case 'X':
            score = 1;
            break;
        case 'Y':
            score = 2;
            break;
        case 'Z':
            score = 3;
            break;
    }

    if (outcome === 'X') {
        if ((shape1 === 'X' && shape2 === 'Z') || (shape1 === 'Y' && shape2 === 'X') || (shape1 === 'Z' && shape2 === 'Y')) {
            score += 0;
        } else {
            score += 1;
        }
    } else if (outcome === 'Y') {
        if (shape1 === shape2) {
            score += 3;
        } else {
            score += 1;
        }
    } else if (outcome === 'Z') {
        if ((shape1 === 'X' && shape2 === 'Z') || (shape1 === 'Y' && shape2 === 'X') || (shape1 === 'Z' && shape2 === 'Y')) {
            score += 6;
        } else {
            score += 1;
        }
    }

    return score;
}

const fs = require('fs');

let totalScore = 0;

fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    const input = data.toString();
    const lines = input.split('\n');

    lines.forEach((line) => {
        // Split the line into the two shapes and the outcome
        const [shape1, shape2, outcome] = line.split(' ');
        // Look up the name of the shape using the dictionary
        const shape1Name = SHAPES[shape1];
        const shape2Name = SHAPES[shape2];
        // Calculate

        // Calculate the score for the round
        const roundScore = calcScore(shape1Name, shape2Name);
        // Add the score to the total score
        totalScore += roundScore;
    });

    console.log(totalScore);
});


// Wish I could include the chat log but it didn't do that good a job on this one. 
// This isn't great either