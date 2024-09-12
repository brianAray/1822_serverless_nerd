const fs = require('fs');

// Reading from a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});

// Writing to a file

const content = "Hello from node.js"

fs.writeFile('example.txt', content, 'utf8', (err) => {
    if (err){
        console.error(err);
        return;
    }
    console.log('File has been written');
});

// Appending to a file

const additionalContent = 'Appending more data';

fs.appendFile('example.txt', additionalContent, 'utf8', (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("Data has been appended");
});


// Checking if a file or directory exists

if (fs.existsSync('example1.txt')){
    console.log("File exists");
}else{
    console.log("File does not exist")
}

// Creating directory

// fs.mkdir('myDirectory', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("Directory created");
// });

// removing direcotry
fs.rmdir('myDirectory', (err) => {
    if (err){
        console.error(err);
        return;
    }

    console.log("Directory removed");
});