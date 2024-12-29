console.log(30>40);
console.log(20>10);
console.log(50==40);

//string

console.log("apple" > "banana");//false...as it compares the ascii value of alphabets from the beginning

console.log("2" > 1)//comparison operator converts the string to number (//true)
console.log("01"==1);//true as it converts the string to number 
//== not checks the type   

console.log("01"===1);//false

console.log(null==undefined);//true
console.log(null===undefined);//false
console.log(null>0)//false as null becomes 0
console.log(null<1)//true
console.log(null>=0)//true
console.log(null == 0)//faalse as here null is null

console.log("2">"3");

//ternary operator --> condition ? yes : no

let a=12;
let b;
console.log(a+b);//NaN

console.log(12+" ");//12
console.log(12+"null");//12null
console.log(12+null);//12

//note:short-circuitig in js(and operator)
//&& returns  first false value
//....|| returns first true value

//nullish collision(??)
let firstname="sup";
console.log(firstname ?? "hiddeng");//sup
//if first  name is null or undefined it will return hiddeng

