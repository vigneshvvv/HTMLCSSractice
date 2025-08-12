function SampleLoad(){
 let sample = document.getElementById("SampleInjection");
 console.log(sample.textContent);
 sample.textContent = "Welcome";   
}

function addNumber(){
     let num1 = Number(document.getElementById("input1").value);
     let num2 = Number( document.getElementById("input2").value);
    // let num3 = Number(num1);
    // let num4 = Number(num2);
     let c = num1 + num2;
     console.log(c);
     let content = document.getElementById("Addition");
     content.textContent = c;
}

let math = Math.random()*10;
let d = math*10;
console.log(Math.floor(d));
function render(){
    let key = document.getElementById("sampleMethod");
    let newn = document.getElementById("keyupinut");
    key.textContent = newn.value; 
}

function appendTesting(){
    let x = document.getElementById("testing");
    x.append("Testing")
}

function elementCreation(){
    let newf = document.createElement("h1");
    let v = document.getElementById("tagCreation");
    newf.textContent = "Element created";
    v.append(newf);
}

function removeContent(){
    let esc = document.getElementById("removeit");
    esc.remove();
}
function colorChange(){
    let color = document.getElementById("colorAttr");
    color.style.backgroundColor = "Red";
}

function eventCheking(event){
    console.log(event.target);
    let v = event.target.textContent;
    let h1content = document.getElementById("CloneCheck");
    h1content.textContent = v;
}
