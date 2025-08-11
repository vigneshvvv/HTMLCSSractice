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

let math = Math.random();
console.log(math);
