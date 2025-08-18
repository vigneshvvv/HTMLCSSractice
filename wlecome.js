let btnn = document.getElementById("btn");
btnn.addEventListener("click", (event) => {
    btnn.textContent = "submit";
})

btnn.addEventListener("mouseover", (event) => {
    btnn.textContent = "changing";
})

btnn.addEventListener("mouseout", (event) => {
    btnn.textContent = "click";
})