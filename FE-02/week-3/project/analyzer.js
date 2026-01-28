const fs = require("fs");

const data = fs.readFileSync('bank_statements.csv','utf-8');



// ------- CSV Parsing --------
const lines = data.trim().split("\n");
const headers = lines[0].split(",");

const transactions = lines.slice(1).map(line => {
  const values = line.split(",");
  let obj = {};
  headers.forEach((header, index) => {
    obj[header.trim()] = values[index].trim();
  });
  return obj;
});