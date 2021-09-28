const fs = require('fs');
const JSONToCSV = require('json2csv').parse;
const CSVToJSON = require('csvtojson');

//Writing Csv File And Converting CSV TO JSON
CSVToJSON().fromFile("./source.csv").then(source=>{
    source[0].name = "Aachal"
    console.log(source[0].name);
    source.push({
        "name" : "GOVARDHAN",
        "address" : "Bethavole",
        "salary" : "50000"
    });
    console.log(source);

    //Updating the data into Same File
    let e = JSON.stringify(source);
    fs.writeFile("Employee.json" ,e,err => {
    if(err) throw err;
    console.log("Data written Into New File")
    console.log("New Updated Data" +e);
});
// Converting JSON File To CSV 
  const csv = JSONToCSV(source, { fields : ["name" ,"address" , "salary"] });
  fs.writeFileSync("./Govardhan.csv" , csv);
 console.log(csv);
});
