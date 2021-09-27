
//--------------forEach-------------------
//APPROACH 1
var names =["GOPI" ,"REDDY" , "NIKHILA"]
function print(values){
    console.log(values)
}
names.forEach(print)
//APPROACH---2
names.forEach(element => console.log("The result of forEach method :" +element));

//-------------FILTER---------
//Giving values in array and filtering elements using filter
var values = [10,45,25,45,65]
function lessthan30(val){
    return val<30
}
var valueslessthan30 = values.filter(lessthan30)
console.log("The result of filter function :" +valueslessthan30);

//-------------REDUCE---------

var numbers = [5,8,7,6,10]
function addition(n1,n2){
    return n1+n2
}
var numaddition = numbers.reduce(addition,0)
console.log("The result of Reduce function :" +numaddition);

//-----------------ARROW-----------------------
var arry = [7,8,9,10]
var sumOfArrayElements = console.log("The Result of arrow function : "+arry.reduce((p1,p2) => p1 + p2 ,0)); 
//2-Method
var sum =(p1,p2) =>{
    const add = p1+p2
    console.log(p1,"plus" ,p2 ,"is" , add)
    return add 
}
var sumof = arry.reduce(sum,0)

