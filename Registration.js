// let reg = document.getElementById("formobject");
let reg = document.getElementById("formobject").addEventListener("sumbit", function(event){
    let frm = document.getElementById("formobject");
    let btn = document.getElementById("output");
    event.preventDefault();
    let formdata = new FormData(event.target);
    console.log(formdata);
})