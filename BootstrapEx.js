let doc = document.getElementById("floatingSelect");

doc.addEventListener("change", function(event){
 let selectedvalue = doc.value;
 console.log(selectedvalue);
 let newselect = doc.options[doc.selectedIndex].text;
 console.log(newselect);
 if(newselect === "Users"){
    dataSync();
 }

})

async function dataSync () {
    let result = await fetch("https://jsonplaceholder.typicode.com/users")
    .then( data => data.json())
    .then( e => {
        e.forEach(element => {
            console.log("the Received element was" + element);
            let dc = document.getElementById("sampleTable");
            let fa = document.createElement("tr");
            fa.innerHTML = `<td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.phone}</td>
            <td>${element.website}</td>    
            `
            dc.append(fa);
        });
    })
}