
//-----------VAR--KEYWORD----
//Wherever We declare this variable by using var ,it will take the last value you assigned to it only..
//for inside and outside of block it will take last assigned value only..
var fstname = "GOPI";
 fstname = "REDDY"
{   
    fstname="Govardhan";
    console.log("inside block  : "+fstname);
}
console.log("Outside Block : "+fstname);


//----------------LET KEYWORD----------------

//if we declare variable inside block for that block only that variable is support.
//if we declare a variable inside block it wont support outside of block.
//for we declare outside and we are printing outside the latest assigned varibale it will take only. 

let n1= "nikhila"
 n1 ="nikky"
if(true){
      let n1= "AMMU"
    console.log("Inside Block : " +n1);
}
console.log("Outside block :" +n1);

//-------CONST---KEYWORD
// if we declare const inside it will allow for that block only,it wont take for outside
// if we declare outside it will access to print inside and outside block.
const n2 = "Reddy";
if(true){
    const n2 = "GOPI REDDY";

    console.log("Inside block : " +n2);
}
console.log("Outside block : " +n2);

