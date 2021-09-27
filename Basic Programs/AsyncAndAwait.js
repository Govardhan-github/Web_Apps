function fun1(value ,error){
    return new Promise((resolve , reject) => {
        if(!error)
            resolve(value+10);
        else
            reject("something went wrong");    
    });
    
}

async function result(){
    let result1 = await fun1(10,false);
    return result1;
}
console.log(result());
result().then((result)=>console.log(result));