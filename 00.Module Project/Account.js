// validation login and SignUp page valdation

// let user not keep the fields empty

// targer username  

var val_uname= document.getElementById("user_id");
// document.write(val_uname);
console.log(val_uname);

// target password
var val_pwd= document.getElementById('user_password');
console.log(val_pwd);

// target email field of registration form(signup page)
var val_email = document.getElementById("email");

// define an event Listner
document.getElementById("loginButton").addEventListener("click", validLogin);

// function to validate correct user name and password

function validLogin(){
    if (val_uname.value == "")
  {alert("Username field can't be empty");
    val_uname.style.borderColor='red';}

    else if(val_email == "")
   {alert("email field can't be empty")
   val_email.style.borderColor='red';}

    else if(val_pwd.value == "")
   {alert("password field can't be empty" );
   val_pwd.style.borderColor='red';}

    else
    document.write("loginSuccessful");
}