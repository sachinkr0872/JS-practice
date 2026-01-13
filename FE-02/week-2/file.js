//---------------------------------------   File Handling in NodeJS    ------------------------------------------------

// fs---file System
const fs = require("fs");

// Sync......
fs.writeFileSync('./test.txt', 'Hey sachin');

// Async........
fs.writeFile("./test.txt", "Hey sachin Async", (err) => {});

//  git add FE-02/week-2/file.js
