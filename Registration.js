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