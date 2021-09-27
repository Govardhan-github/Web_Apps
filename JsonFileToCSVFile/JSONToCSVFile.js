const fs = require('fs')
const JSONToCSV = require('json2csv').parse;
const CSVToJSON = require('csvtojson');

//Writing Csv File And Converting CSV TO JSON
CSVToJSON().fromFile("./source.csv").then(source=>{
    console.log(source);
})

//Converting JSON File To CSV 
 const csv = JSONToCSV('Employee.json', { fields : ["name" ,"address" ] });
 fs.writeFileSync("./new-Emp.csv" , csv);
console.log(csv)
