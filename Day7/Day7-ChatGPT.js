// Define a File class
class File {
    constructor(size, isDirectory) {
        this.size = size;
        this.isDirectory = isDirectory;
    }
}

// Define a Directory class
class Directory {
    constructor(name) {
        this.name = name;
        this.files = [];
        this.totalSize = 0;
    }
}

// Define a function to find the total sizes of all directories with a total size of at most 100000
function findTotalSizes(terminalOutput) {
    // Initialize the current directory to be the outermost directory
    let currentDirectory = new Directory("/");

    // Keep track of all directories we have seen
    let directories = {"/": currentDirectory};

    // Parse the terminal output line by line
    for (let line of terminalOutput.split("\n")) {
        // Skip empty lines
        if (line === "") continue;

        // If the line starts with "$", it is a command
        if (line[0] === "$") {
            // Extract the command and its arguments
            let [command, ...args] = line.split(" ");

            // Handle the "cd" command
            if (command === "cd") {
                // If the argument is "/", switch the current directory to the outermost directory
                if (args[0] === "/") {
                    currentDirectory = directories["/"];
                }
                // If the argument is "..", move out one level by switching the current directory to its parent
                else if (args[0] === "..") {
                    currentDirectory = directories[currentDirectory.name];
                }
                // Otherwise, move in one level by switching the current directory to the directory with the given name
                else {
                    currentDirectory = directories[args[0]];
                }
            }
            // Handle the "ls" command
            else if (command === "ls") {
                // Parse the files and directories listed in the output
                for (let item of args) {
                    // If the item starts with "dir", it is a directory
                    if (item.startsWith("dir")) {
                        // Extract the directory name
                        let dirname = item.split(" ")[1];

                        // Create a new directory and add it to the list of directories
                        let directory = new Directory(dirname);
                        directories[dirname] = directory;

                        // Add the directory to the list of files in the current directory
                        currentDirectory.files.push(directory);
                    }
                    // If the item is just a number, it is a file
                    else if (Number.isInteger(parseInt(item))) {
                        // Extract the file size
                        let size = parseInt(item);

                        // Create a new file and add it to the list of files in the current directory
                        let file = new File(size, false);
                        currentDirectory.files.push(file);

                        // Update the total size of the current directory
                        currentDirectory.totalSize += size;
                    }
                }
            }
        }
    }

    // Initialize the sum of the total sizes of all directories with a total size of at most 100000
    let sum = 0;

    // Calculate the total size of each directory by traversing the directory tree
    for (let directory of Object.values(directories)) {
        // Traverse the list of files in the directory
        for (let file of directory.files) {
            // If the file is a directory, add its total size to the total size of the current directory
            if (file.isDirectory) {
                directory.totalSize += file.totalSize;
            }
        }

        // If the total size of the directory is at most 100000, add it to the sum
        if (directory.totalSize <= 100000) {
            sum += directory.totalSize;
        }
    }

    // Return the sum of the total sizes of all directories with a total size of at most 100000
    return sum;
}

const fs = require('fs');
const instructions = fs.readFileSync('Day7/sane.txt', 'utf8');

const result = findTotalSizes(instructions);
console.log(result);

// This time  I just gave it the whole prompt but shockingly it didn't really understand.
// I think it is trying to use what the results of a command would be if run rather then the log.