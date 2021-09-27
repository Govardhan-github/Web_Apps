// //Calling 3 functions 
step1(10 ,function(result1 ,error){
    if(!error)
        step2(result1, function(result2 ,error){
            if(!error)
                step3(result2 ,function(result3 , error){
                    if(!error)
                        console.log("The sum is by using Callback function : " + result3);
                });
        });
});
//Declaring three functions
function step1(value ,callback){
    callback(value+10 ,false)
}
function step2(value, callback){
    callback(value+10 ,false)
}

function step3(value ,callback){
    callback(value+10 ,false)
}

//By declaring Number of callback function inside and inside it tends to decrease the code readbility
//so to overcome that we can use promises
//--------------------USING PROMISE-----------------------------------

function fun1(value ,error){
    return new Promise((resolve , reject) => {
        if(!error)
            resolve(value+10);
        else
            reject("something went wrong");    
    });
}

function fun2(value ,error){
    return new Promise((resolve , reject) => {
        if(!error)
            resolve(value+10);
        else
            reject("something went wrong");    
    });
}

function fun3(value ,error){
    let p = new Promise((resolve , reject) => {
        if(!error)
            resolve(value+10);
        else
            reject("something went wrong");   
    });
     return p;
}

fun1(10,false)
    .then((re1) => fun2(re1,false))
    .then((re2) => fun2(re2,false))
    .then((re3) => console.log("The sum is by using Promise : " + re3))
    .catch((error) => console.log(error))