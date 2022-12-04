const fs = require('fs');
const input = fs.readFileSync('Day4/input.txt', 'utf8').split('\n');

let overlaps = 0;
let anyoverlaps = 0;
input.forEach(function (line) {
    const assignments = line.split(',');
    const fullAssignments = assignments.map(function (assignment,idx) {
        const parts = assignment.split('-');
        const first = parseInt(parts[0]);
        const last = parseInt(parts[1]);
        return Array(last-first+1).fill().map((_, idx) => first + idx);
    }); 

    var overlap = fullAssignments[0].every(function (el) { return fullAssignments[1].includes(el) }) || 
        fullAssignments[1].every(function (el) { return fullAssignments[0].includes(el) });
    if(overlap) overlaps++;
    if(fullAssignments[0].filter(function (el) { return fullAssignments[1].includes(el) }).length>0) anyoverlaps++;

});

console.log("Question a :" + overlaps);
console.log("Question b :" + anyoverlaps);

