const { error } = require('console');
const fs = require('fs');

//READING JSON FILE 
fs.readFile("Employee.json" ,(error,data)=>{
    if(error) throw console.error("NO SUCH FILE");;
    let emp = JSON.parse(data);
    console.log(emp);
});

//Updating code
let emp = {
    "name" : "Govardhan",
    "ID"  : "101",
    "Salary" : "47000"
};

//Writing Into New File
let e = JSON.stringify(emp);
fs.writeFile("new-Emp.json" ,e,err => {
    if(err) throw err;
    console.log("Data written Into New File")
    console.log("New Updated Data" +e);
});
