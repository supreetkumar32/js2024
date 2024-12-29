let displaymsg="hello everyone";

for(let char of displaymsg){
    if(char== "l")
    console.log(char);

}

//or
for(let i=0;i<displaymsg.length;i++){
    console.log(displaymsg[i]);
}

console.log("methods");
//methods
let dm="hello vgcdhmvfugw";
let index=300;
console.log(dm.charAt(index));

//ascii
const asciiCode=dm.charCodeAt(0);
console.log("asciicode" +asciiCode);

//indexOf
const dis="hello everyone";
console.log(dis.indexOf("e"));//it will return -1 if the character is not present in the string

// function findch(str,ch){
//     let z=str.indexOf(ch);
//     return z;
// }

// let ind= findch("hello eveyone on earth","e");
//using arrow function
// const ind= (str,ch)=>str.indexOf(ch);
//  console.log("ind" +ind);

//includes() method returns boolean value
const a="where there is a will there is way";
console.log(a.includes("there"));

//toUpperCase() and toLowerCase()
const m="udgfe";
console.log(m.toLowerCase);

//substring
const sub="fgdf fhhsjgb w";
console.log(sub.substring(1,5));

//trim
const text="             fgvds fg df gf s  ";
console.log(text.trim());
console.log(text.trim().substring(0,5));
