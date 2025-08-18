function jsobj(){
    let obj = {
        "id":1,
        "name": "vignesh",
        "task": "create login page",
        "tech": ["Html","CSS", "Java", "GCP"],
        "other":{
            "rating": "undefined"
        }
    }
    console.log(obj.name);
    obj.name = "kumar"
    console.log(obj.name);
    console.log(obj.tech);
    obj.tech.push("Docker");
     console.log(obj.tech);
     console.log(obj.other.rating);
}

function login(){
    let loginDetails = [{
        "username": "vignesh",
        "password": "vignesh"
    },
    {
        "username": "kumar",
        "password": "kumar"
    }
]
let user = document.getElementById("username").value;
let password = document.getElementById("pass").value;
let result = false;
for(let i=0; i<loginDetails.length; i++){
    if(user === loginDetails[i].username && password === loginDetails[i].password){
        console.log("login successful");
        result = true;
    }
}

if(!result){
    console.log("please register");
      window.open("RegistrationPage.html","_blank")
}else{
    console.log("login successful");
     window.open("welcomePage.html","_blank")
}
}