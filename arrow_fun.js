const add=function (x,y){
    return x+y;
}

console.log(add(1,2))

//arrow function
const sum=(x,y)=>{
    return x+y;
}
//or
//const sum=(x,y)=> x+y;
//arrow with ternary operator
const sum1 = (x,y) => x>y ? x+y :x-y;

console.log(sum(3,4));
console.log(sum1(4,6));
