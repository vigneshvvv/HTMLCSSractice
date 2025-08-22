// let reg = document.getElementById("formobject");
// let reg = document.getElementById("formobject").addEventListener("submit", function(event){
//     let frm = document.getElementById("formobject");
//     let btn = document.getElementById("output");
//     event.preventDefault();
//     let formdata = new FormData(event.target);
//     console.log(formdata);
//     console.log(formdata.get("name"));
//     let obj = Object.fromEntries(formdata.entries());
//     console.log(obj);
// })

let esc = 2;
let display;

switch(esc){
    case 1:
        console.log("Default");
        break;
    case 2:
        console.log("case2 Executed");
        break;    
    default:
        console.log("defaultExecuted");    
}

let obj = document.getElementById("newForm").addEventListener("submit", function(event){
    event.preventDefault();
    let frm = document.getElementById("newForm");
    let inp = document.getElementById("finalOutput");
    let fromData = new FormData(event.target);
    console.log("formData" + fromData);
    console.log(fromData.get("firstname"));
    console.log(fromData.get("userId"));
    let objectN = Object.fromEntries(fromData.entries());
    console.log(objectN);
    console.log(objectN.firstname);
})
let x;
async function sample() {
    try{
        let res = await fetch("sample.json");
         x = await res.json();
        console.log(x);
        return x; 
    }catch(e){
        console.log("error thrown")
        console.error(e);
    }
    
}

async function useData() {
    let data = await sample();
    console.log(data[0].name);
    
}
useData();

let obj1 = {
    name:"vs",
    proff: "Dev"
}

for (key in obj1){
    if(key === "n"){
        console.log("if got printed");
    }
    else if (key === "name") {
        console.log("else if printed");
    } else {
        console.log("got none");
    }
    console.log(key);
    console.log(obj1[key]);
}

let env;
async function ecom() {
    try{
    let data4 = await fetch("objectSample.json");
    let nk = await data4.json();
      console.log("dataReceived");
    return nk;
    }catch(e){
        throw e;
    }
}

// /ecom().then(e => console.log(e));

async function sample2(){
    let data = await ecom();
    let data1 = await getMethod();
    console.log(data);
    console.log(data1);
}

sample2();


async function getMethod() {
    try{
    let data4 = await fetch("https://jsonplaceholder.typicode.com/users").then(

        e =>  e.json()
    );
    return data4;
 
    }catch(e){
        throw e;
    }
}

async function postExample(data) {
    let data5 = await fetch("htt://locahost:8080/api/v1/insert", {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


async function newTestingJson() {

    let result = await fetch("https://jsonplaceholder.typicode.com/users")
    .then( e => e.json())
    .then (result => console.log(result));    
}

newTestingJson();

  
