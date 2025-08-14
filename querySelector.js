

function QuerySelection(){
let v = document.querySelectorAll("h1");
for(let i = 0; i <v.length; i++){
console.log(v[i].textContent);
}
}

function createN(){
    let elementf = document.createElement("li");
    let xe = document.getElementById("inputValue");
    let ult = document.getElementById("ultest");
    elementf.innerHTML = xe.value + "<button onclick='deleteContent(event)'>Delete</button>";
    ult.append(elementf);
}

function deleteContent(event){
    let eve = event.target;
    eve.parentNode.remove();

}
function addRow(){
    let fs = document.getElementById("fS");
    let d1 = document.createElement("td");
    d1.innerHTML = fs.value;
      let ls = document.getElementById("lS");
    let d2 = document.createElement("td");
    d2.innerHTML = ls.value;
     let ES = document.getElementById("ES");
    let d3 = document.createElement("td");
    d3.innerHTML = ES.value;

    let tablerow = document.createElement("tr");
    tablerow.append(d1, d2, d3);

    let tabE = document.getElementById("tabE");
    tabE.append(tablerow);
}