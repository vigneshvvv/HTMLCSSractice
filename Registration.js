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
    let data4 = await fetch("objectSample.json");
    let nk = await data4.json();
      console.log("dataReceived");
    return nk;
}

// /ecom().then(e => console.log(e));

async function sample2(){
    let data = await ecom();
    console.log(data);
}

sample2();
