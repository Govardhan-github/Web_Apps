const fs = require('fs');
const json2xml =  require('json2xml')

//Converting JSON To Xml File
fs.readFile('./Employee.json',function read(err,data){
if(err)console.log(err);
let json = json2xml(JSON.parse(data));
console.log(json);
fs.writeFileSync('./Data.xml',json);
});
