"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(function (c) {
    //console.log(c.toUpperCase()==c?c.charCodeAt(0)-38: c.charCodeAt(0)-96);
});



const fs = require('fs');
const input = fs.readFileSync('Day3/input.txt', 'utf8').split('\n');

function getPriority(c) {
    return c.toUpperCase()==c?c.charCodeAt(0)-38: c.charCodeAt(0)-96;
}

let total = 0;
input.forEach(function (line) {
    const len = line.length;
    const half = Math.floor(len / 2);
    const first = line.slice(0, half);
    const second = line.slice(half, len);
    const missing = first.split('').filter(function (el) { return second.indexOf(el) !=-1; })[0];
    var priority = getPriority(missing);
    total += priority;
});

console.log("Question a : " + total);

let badgeTotal = 0;
const rucksacks = input.length;
const groups = Math.floor(rucksacks / 3);
console.log(groups);
for(let group = 0;group<groups;group++){
    const groupPacks = input.slice(group*3,group*3+3).map(line=>line.split(''));
    const badge = groupPacks[0].filter(function (el) { return groupPacks[1].indexOf(el) !=-1 && groupPacks[2].indexOf(el) !=-1; })[0];
    badgeTotal += getPriority(badge);
}
console.log("Question b : " + badgeTotal);