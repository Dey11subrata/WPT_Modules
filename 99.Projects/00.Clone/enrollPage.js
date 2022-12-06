// accessing form with index num
// var uform=document.getElementsByClassName('form')
// console.log(uform);
// accessing form fields by getElementById() method
// var user = document.getElementById('validationEmail');
// console.log(user);
// console.log(user.name);
// console.log(user.type);
// console.log(user.class);
// console.log(user.placeholder);
// with element [indexno]

// accessing form fields by document.form_name.element[indexNoOfElement]
// var user1= document.userform.elements[0];
// console.log(user1);
// // var user1= document.userform.elements[1];
// // console.log(user1);
// // var user1= document.userform.elements[2];
// console.log(user1);
// console.log(user1.name);
// console.log(user1.type);
// console.log(user1.class); // class is not accessable
// console.log(user1.placeholder);


// accessing form fields by document.form_name.name_attribute value
// var user2= document.userform["newPassword"];
// console.log(user2);
// console.log(user2.name);
// console.log(user2.type);
// console.log(user2.id); 
// console.log(user2.placeholder);

//  set value using field attribute
// var user=document.getElementById("validationEmail");
// console.log(user);
// user.value="hacker";
// console.log(user.value);

// access form using form name

var useremail = document.getElementById("validationEmail");
console.log(useremail);
// now we got access of email field in the form
// apply validation to enter details.

function validateEmail(){
    // var patrn=/^([^0-9\W]*)$ /;
    if(useremail.value==""){
        alert("no blank value allowed")
    }
    else{
        useremail.style.backgroundColor ='green';
    }
}
useremail.addEventListener("keyup", validateEmail);