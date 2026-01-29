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

// ----------- Sort by Date ----------------
transactions.sort((a, b) => {
  return new Date(a.Date) - new Date(b.Date);
});


// -------------- Analysis --------------------

const summaryMap = {};

transactions.forEach(txn => {
  const name = txn.AccountHolder;
  const amount = Number(txn.Amount);
  const type = txn.Type;
  const remarks = txn.Remarks;
  const txnId = txn.TransactionID;

  if (!summaryMap[name]) {
    summaryMap[name] = {
      AccountHolder: name,
      TotalCredit: 0,
      TotalDebit: 0,
      LargestTransaction: 0,
      SalaryTransactions: []
    };
  }

  if (type === "Credit") {
    summaryMap[name].TotalCredit += amount;
  } else if (type === "Debit") {
    summaryMap[name].TotalDebit += amount;
  }

  if (Math.abs(amount) > Math.abs(summaryMap[name].LargestTransaction)) {
    summaryMap[name].LargestTransaction = amount;
  }

  if (remarks.toLowerCase().includes("salary")) {
    summaryMap[name].SalaryTransactions.push(txnId);
  }
});


//----------- summarize data ----------
const summaryArray = Object.values(summaryMap);

console.log("\n📊 SUMMARY DATA:\n");
console.log(summaryArray);

// ------ now converting summary into CSV--------- 

const csvHeaders = [
  "AccountHolder",
  "TotalCredit",
  "TotalDebit",
  "LargestTransaction",
  "SalaryTransactions"
];

let csvContent = csvHeaders.join(",") + "\n";

summaryArray.forEach(item => {
  csvContent += [
    item.AccountHolder,
    item.TotalCredit,
    item.TotalDebit,
    item.LargestTransaction,
    item.SalaryTransactions.join("|")
  ].join(",") + "\n";
});


// ------- save file ------------
fs.writeFileSync("bank_summary.csv", csvContent, "utf-8");

console.log("\n✅ bank_summary.csv generated successfully!");