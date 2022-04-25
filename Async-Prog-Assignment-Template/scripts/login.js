
let array=JSON.parse(localStorage.getItem("SignUpData"));


document.querySelector("form").addEventListener("submit",loginFun);

function loginFun(){

    event.preventDefault();

    let form=document.querySelector("form");

    array.map(function(e){

        let email=form.email.value;

        let password=form.password.value;

        if(email == e.email && password==e.password){

            alert("Login Successful");
            window.location.href="index.html";
        }
        else{

            alert("invalid Credentials.");   
            window.location.href="login.html";
        }
    });
}