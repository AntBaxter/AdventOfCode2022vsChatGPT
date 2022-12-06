class Stack {
    constructor(stack, items){
        this.stack = stack;
        this.items = items;
    }
    push(item){
        if(Array.isArray(item)){
            this.items = this.items.concat(item);
        }
        else
            this.items.push(item);
    }
    pop(num){
        if(num==undefined){
            return this.items.pop();
        }
        else {
            var ret= this.items.slice(-num);
            this.items = this.items.slice(0,this.items.length-num);
            return ret;
        }
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    peekAt(index){
        return this.items[index];
    }
}

//Read input
const fs = require('fs');
const input = fs.readFileSync('Day5/input.txt', 'utf8').split('\n');
//console.log(input);
//Find where the stack setup and moves are split by an empty line
let seperatoridx = input.indexOf('');
//Split the input into the stack setup and the moves
let stacks = input.slice(0,seperatoridx);
let moves = input.slice(seperatoridx+1);
//Select just the meaningful char of each line
splitStacks = stacks.map(stack=>stack.split('').filter((el,idx)=>idx%4==1 ));


let stackBoard = splitStacks[splitStacks.length-1].map((el,idx)=>{
    const s = new Stack(el,[]);
    splitStacks.slice(0,splitStacks.length-1).flatMap(c=>c[idx]).reverse().filter(e=>e!=' ').forEach(e=>s.push(e));
    return s;
});



const moveRegex = /move (\d*) from (\d*) to (\d*)/;

moves.forEach(move=>{
    // console.log("--------------------");
    // console.log(stackBoard);
    let [match,num,from,to] = move.match(moveRegex);
    while(num>0){
        stackBoard[to-1].push(stackBoard[from-1].pop());
        num--;
    }
    
});



// console.log("--------------------");
console.log("Question a: "+stackBoard.flatMap(s=>s.peek()).join(''));

stackBoard = splitStacks[splitStacks.length-1].map((el,idx)=>{
    const s = new Stack(el,[]);
    splitStacks.slice(0,splitStacks.length-1).flatMap(c=>c[idx]).reverse().filter(e=>e!=' ').forEach(e=>s.push(e));
    return s;
});

moves.forEach(move=>{
    let [match,num,from,to] = move.match(moveRegex);

    stackBoard[to-1].push(stackBoard[from-1].pop(num));
    num--;
});
console.log("Question b: "+stackBoard.flatMap(s=>s.peek()).join(''));