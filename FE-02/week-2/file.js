//---------------------------------------   File Handling in NodeJS    ------------------------------------------------

// fs---file System
const fs = require("fs");

// Sync......
// fs.writeFileSync('./test.txt', 'Hey sachin');

// Async........
// fs.writeFile("./test.txt", "Hey sachin Async", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if(err){
        console.log("Error", err)
    } else{
        console.log(result)
    }
})

//  git add FE-02/week-2/file.js
