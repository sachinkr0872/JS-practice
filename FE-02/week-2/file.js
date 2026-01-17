//---------------------------------------   File Handling in NodeJS    ------------------------------------------------

// fs---file System
// const fs = require("fs");

// Sync......
// fs.writeFileSync('./test.txt', 'Hey sachin');

// Async........
// fs.writeFile("./test.txt", "Hey sachin Async", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error", err)
//     } else{
//         console.log(result)
//     }
// })

const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname, "test.txt");

// fs.appendFile(filePath, "Hello bhai\n", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Data appended successfully");
//     }
// });


// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString())

//  fs.appendFileSync('./test.txt', 'Hey sachin');



// fs.appendFileSync("./test.txt", `${Date.now()} Hey sachin\n`)


// fs.cpSync("./test.txt", "./copy.txt")

fs.unlinkSync("./copy.txt")











//  git add FE-02/week-2/file.js


