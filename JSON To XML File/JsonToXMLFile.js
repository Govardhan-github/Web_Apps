const fs = require('fs');
const JSONToXML =  require('json2xml')
const data = require('./Employee.json')

let kl = JSONToXML(JSON.parse(data).value);
var xml = JSONToXML(JSON.parse('./Employee.json').value);
console.log(kl)
