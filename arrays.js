let sname = ["abc","def","ghi","jkl",["d","efg","hij"],1];
console.log(sname);
for(let i=0;i<sname.length;i++){
    console.log(sname[i]);
}

//or 
console.log();
console.log("before or");
for(let i of sname)
{
    console.log(i);
}

//mutable objects (that can be changed) or immutable(that cant be changed)

let fruits=["apple","mango","grapes"]
console.log(fruits);
fruits.push("orange");
console.log(fruits);
fruits.push("kiwi","melon");
console.log(fruits);

//concat
let arr1=[1,2,3];
let arr2= [4,5,6];
let arr3 = [7,8,9];
let arr4=arr1.concat(arr2);
console.log(arr4);
let arr5=arr1.concat(arr2,arr3);
console.log(arr5);

console.log("result " , arr1+arr2);//result  1,2,34,5,6

//pop
let sub=["maths","eng","hindi","geo","sci"];
console.log(sub);
sub.pop();
console.log("updated" , sub);

//slice
console.log("sub slice" ,sub.slice(1,3));//returning values from index 1 to 3 but not 3
console.log(sub);

//splice
let courses=["html","css","js","react","spring","angular","vue"];
courses.splice(4,2);//starts from index 4 and deletes 2 items from index 4
console.log(courses);
courses.splice(3,0,"reactjs");
console.log(courses);

//includes
let size=['a','b','c','d','e'];
console.log(size.includes('a'));//return true if it consists

//array sort
const f=["apple",'mango',"grapes"];
f.sort();
console.log(f);

const g=[1,5,3,7,5,6];
console.log(g.sort());//[ 1, 3, 5, 5, 6, 7 ]
//note: sort method converts the numbers into string and then sort it

const j=[1,5,3,31,51,7,5,6];
console.log(j.sort());//  1,  3, 31, 5,5, 51,  6, 7

//sorting 
const k=[1,5,3,31,51,7,5,6];
function sortinascending (a,b){
    return a-b;
}
k.sort(sortinascending);
console.log(k);

//split
const inputstr="I love my country";
console.log(inputstr.split(" "));//[ 'I', 'love', 'my', 'country' ]


console.log(inputstr.split(""));
// [
//     'I', ' ', 'l', 'o', 'v', 'e', ' ', 'm', 'y', ' ',
//     'c', 'o', 'u', 'n', 't',
//     'r', 'y'
//   ]

//join method will join the splited values
const is="madam";
const al=is.split("");
console.log(al);//[ 'm', 'a', 'd', 'a', 'm' ]
console.log(al.join(""));//madam