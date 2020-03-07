const fs = require('fs');
const path = require('path');

//Create folder
s.mkdir(path.join(__dirname, '/test'), {}, function(err) {
    if (err) throw err;
    console.log('Folder created');
});

//Create and write to file

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
    if (err) throw err;
    console.log("File created and written to");

    //Append to existing file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Appending to existing file', err => {
        if (err) throw err;
        console.log("Appended to file");
    });
});


//Read from existing file 
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

//Rename existing file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if (err) throw err;
    console.log('File has been renamed');
});