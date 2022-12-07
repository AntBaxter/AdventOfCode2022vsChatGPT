


const fs = require('fs');
let input = fs.readFileSync('Day6/input.txt', 'utf8');
for(let idx = 4; idx<input.length; idx++){
    //Get the previous 4 chars
    const point = input.slice(idx-4,idx);
    //degeneracy. Make sub arrays of all found chars for each char in the previous 4 chars
    //then flatten the array and filter out all chars that are not found more than once
    const matches = [...point].map((el,idx)=>{
        return [...point].filter(e=>e==el)
    }).flatMap(m=>m.length).filter(m=>m>1);
    //if there are no matches, we have found the first 4chars where none are repeated
    if(matches.length==0){
        console.log("Question a: "+idx);
        break;
    }
}


for(let idx = 14; idx<input.length; idx++){
    //Get the previous 4 chars
    const point = input.slice(idx-14,idx);
    //degeneracy. Make sub arrays of all found chars for each char in the previous 4 chars
    //then flatten the array and filter out all chars that are not found more than once
    const matches = [...point].map((el,idx)=>{
        return [...point].filter(e=>e==el)
    }).flatMap(m=>m.length).filter(m=>m>1);
    //if there are no matches, we have found the first 4chars where none are repeated
    if(matches.length==0){
        console.log("Question b: "+idx);
        break;
    }
}