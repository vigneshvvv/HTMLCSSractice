console.log("The JavaScript console is working fine");
let x = 1;
 let y = 2;
 let z = x + y;
console.log(z);

let example = "I am bot";
console.log(example);

const a = [1,2,3];
console.log(a);
const b = ["V","k","M"];
console.log(b);

let bl = true;
console.log(bl);

let obj = {"name": "vk", "role": "sw"};
let obj1 = [{name: "ss", roles: "testing", data: {exp: 2, start: "2022"}},
    {name: "sf", roles: "CI/CD"}]
console.log(typeof(obj));
console.log(obj1);

function testing(a ,b){
    // console.log(a);
    // console.log(b);
   let c =  a*b;
    console.log(c);
   
}
// testing(10, 40);

function method2(){
     let d;
    d = testing(10, 20);
    console.log(d);
}

let check = false;

if(check){
    console.log("This is true");
}else{
    console.log("The entered value is false");
}

let fe = 10;

if(fe==20){
    console.log("The condition satisfied");
}else{
    console.log("The entered value is false");
}


method2();

let max = 10;
let min = 5;
if(max == 10 || min ==4){
    console.log("condition satisfies");
}
else{
    console.log("none");
}

for(let i=0; i<=10;  i = i+2){
    console.log(i);
}

console.log(document.getElementById("sample"));

let con= document.getElementById("sample");
console.log(con);