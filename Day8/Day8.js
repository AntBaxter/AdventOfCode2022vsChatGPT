const fs = require('fs');
const input = fs.readFileSync('Day8/input.txt', 'utf8').split('\n').map(x => x.split(''));


let visible = 0;
let maxScenery = 0;
const rows = input.length;
const cols = input[0].length;

//All rows
for (let row = 0; row < rows; row++) {
    //All cols
    for (let col = 0; col < cols; col++) {
        // if at edge then visible
        if(row==0 || col == 0 || row == rows-1 || col==cols-1) visible++;
        else{

            //Look along row for blocking trees
            const leftblocking = input[row].filter((val,idx)=>idx<col && val >= input[row][col]).length;
            const rightblocking = input[row].filter((val,idx)=>idx>col && val >= input[row][col]).length;

            //Look up and down for blocking trees, map to just the column and then filter for blocking
            const upBlocking = input.map((val,idx)=>idx<row?val[col]:-1).filter(val=>val>=input[row][col]).length;
            const downBlocking = input.map((val,idx)=>idx>row?val[col]:-1).filter(val=>val>=input[row][col]).length;

            //If any of the firections aren't blocked then it's visible
            if(leftblocking==0 || rightblocking==0 || upBlocking==0 || downBlocking==0) visible++;

            const left = input[row].filter((val,idx)=>idx<col);
            const firstLeftBreak = left.reverse().findIndex(val=>val>=input[row][col]);
            const leftvisibledistance = firstLeftBreak==-1?left.length:(firstLeftBreak+1);

            const right = input[row].filter((val,idx)=>idx>col);
            const firstRightBreak = right.findIndex(val=>val>=input[row][col]);
            const rightvisibledistance = firstRightBreak==-1?right.length:(firstRightBreak+1);

            const up = input.map((val,idx)=>idx<row?val[col]:-1).filter(val=>val>=0);
            const firstUpBreak = up.reverse().findIndex(val=>val>=input[row][col]);
            const upvisibledistance = firstUpBreak==-1?up.length:(firstUpBreak+1);

            const down = input.map((val,idx)=>idx>row?val[col]:-1).filter(val=>val>=0);
            const firstDpwmBreak = down.findIndex(val=>val>=input[row][col]);
            const downvisibledistance = firstDpwmBreak==-1?down.length:(firstDpwmBreak+1);

            const scenery = leftvisibledistance * rightvisibledistance * upvisibledistance * downvisibledistance;
            maxScenery = scenery>maxScenery?scenery:maxScenery;
        }
    }
}

console.log("Question a : "+visible);
console.log("Question b : "+maxScenery);