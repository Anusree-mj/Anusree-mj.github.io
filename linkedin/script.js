let password = document.getElementById("my-password").value;
let email = document.getElementById("my-email").value;


function myFunction() {

   if (password.type == "password") {
      document.getElementById("visibility").innerHTML = "Hide";
      password.type = "text";
      console.log(password.value);
   } else {
      password.type = "password";
      document.getElementById("visibility").innerHTML = "Show";
   }

}
function handleSignin() {
   console.log("email")
   if (email == "") {
      document.getElementById("email_span").textContent = "Please enter an email address or phone number"    
   }
   else{
      document.getElementById("email_span").textContent=""
   }
   if (password == "") {
      document.getElementById("password_span").textContent = "Please enter a password"    
   }else{
      document.getElementById("password_span").textContent =""
   }
}
