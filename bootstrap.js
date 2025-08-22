  const selectEl = document.getElementById("floatingSelect");
    const output = document.getElementById("output");

    // Add event listener
    selectEl.addEventListener("change", function () {
      const selectedValue = selectEl.value;
      const selectedText = selectEl.options[selectEl.selectedIndex].text;
        if(selectedText === "One"){
            tabledata();
        }
      console.log(selectedValue);
    });

    async function tabledata(){
        let data4 = await fetch("https://jsonplaceholder.typicode.com/users")
        .then (response => response.json())
        .then ( e => {

            e.forEach(element => {
                let tab = document.getElementById("newtable");
            let trr = document.createElement("tr");
            trr.innerHTML = `
            <td>${element.email}</td>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.phone}</td>
            <td>${element.username}</td>
            <td>${element.website}</td>
            `
            tab.append(trr);
            });
            
        })
    }