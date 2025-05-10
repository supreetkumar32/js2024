const obj1={};
console.log(typeof(obj1));  //object


//object literal
const obj = { //{key:value}
  name :"sup",
  age :23,
  job :"developer",
  "is admin" :true
};
//{ name: 'sup', age: 23, job: 'developer' }
//note: key should always be string .but here it is not a string as in string it is in ""
//js internally converts it in string
console.log(obj);
console.log(typeof(obj));

console.log(obj.name);console.log(obj["name"]);//these both statements are same
//note: property should be in string (name)


//function as object property
const a={
    name:"sup",
    greetmsg: function(){
        console.log("welcome sup")
    },
    bye(){
        console.log("bye bye")
    }
}
a.greetmsg();
//console.log("greeting" +a.greetmsg());

//adding property to object
const obj={
  name:"Supreet",
  age:24
}

//for adding the property in an object
obj.city="Bgp";

//short hand
function getObjects(name,city){
  return{
    name,city
  }
}
const object=getObjects("Sup","Bgp");
console.log(object);//{name:'Sup',city:'Bgp'}

const student="sup";
const course="react";
console.log({student,course});

