
class file{
    constructor(name,size){
        this.name = name;
        this.size = size;
    }
    fileSize(){
        return this.size;
    }
}

class folder{
    constructor(name,children){
        this.name = name;
        this.children = children;
    }
    fileSize(){
        return this.children.map(child=>child.fileSize()).reduce((a,b)=>a+b);
    }
    fromPath(path){
        if(path==this.name){
            return this
        }
        else{
            const newPath = path.slice(path.indexOf(this.name)+this.name.length);
            const seperatoridx = newPath.indexOf('/');
            return this.children.find(child=>child.name == newPath.slice(0,newPath.indexOf('/')+1) ).fromPath(newPath);
        }
    }

}



const fs = require('fs');
const instructions = fs.readFileSync('Day7/input.txt', 'utf8').split('\n');

let root = new folder('//',[]);
let path = '';
let currentFolder = {};
let folderPaths =['//'];

instructions.forEach(instruction=>{
    var instructionparts = instruction.split(' ');
    if(instructionparts[0]=="$"){
        if(instructionparts[1]=="cd"){
            //We're changing directory
            if(instructionparts[2]==".."){
                //We're going up a directory
                path = path.slice(0,path.lastIndexOf('/'));
                path = path.slice(0,path.lastIndexOf('/')+1);
                currentFolder = root.fromPath(path);
            }
            else{
                //We're going down a directory
                path += instructionparts[2]+"/";
                currentFolder = root.fromPath(path.slice(0));
            }
        }
    }
    else if(instructionparts[0]=="dir"){
        //We've found a directory
        if(currentFolder.children.find(child=>child.name == instructionparts[1])==undefined){
            currentFolder.children.push(new folder(instructionparts[1]+"/",[]));
            folderPaths = [...folderPaths,path+instructionparts[1]+"/"];
        }
    }
    else {
        
        var fileSize = parseInt(instructionparts[0]);
        if(!isNaN(fileSize)){
            //We've found a file
            if(currentFolder.children.find(child=>child.name == instructionparts[1])==undefined)
                currentFolder.children.push(new file(instructionparts[1],fileSize));
        }
    }
});

console.log("---------------------");
folderPathSizes = folderPaths.map(path=>[path,root.fromPath(path).fileSize()]);
console.log("Question a: " + folderPathSizes.filter(fps=>fps[1]<100000).reduce((a,b)=>a+=b[1],0));
const spaceRequired = 30000000-(70000000 - root.fileSize());
folderPathSizes.sort((a,b)=>a[1]-b[1]);
console.log("Question b: "+folderPathSizes.find(fps=>fps[1]>spaceRequired)[1]);


