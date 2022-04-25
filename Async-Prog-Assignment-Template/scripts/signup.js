

let array=JSON.parse(localStorage.getItem("SignUpData"))||[];


document.querySelector("form").addEventListener("submit",singUp);

function singUp(){

    event.preventDefault();

    let form=document.querySelector("form");

    let name=form.name.value;

    let phone=form.phone.value;

    let email=form.email.value;

    let password=form.password.value;

    var obj=new addIN(name,phone,email,password);

    array.push(obj);

    localStorage.setItem("SignUpData",JSON.stringify(array));

    alert("SignUp Successful");

    window.location.href="login.html";
}


function addIN(name,phone,email,pass){

    this.name=name;

    this.phone=phone;

    this.email=email;

    this.password=pass;
}