//function declaration  
function greetmsg(name){ //name is parameter
    console.log(`${name} greeting...`);
}

//calling
greetmsg("abc");

//anonymous function(function which dont have any name)
let anonymousFunction = function(){
    console.log("anonymous ");
}
anonymousFunction();//calling an anonymousFunction 
//note: we cant access anonymous function before initialization

//pure function: which doesnot change the value of the parameter

function calculatesum(x,y){
    return x+y;
}

console.log(calculatesum(10,12));
let res=calculatesum("abc",12);
console.log(typeof(res));
console.log("result" ,res);