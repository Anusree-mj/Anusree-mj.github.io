
function hover(event){
   event.stopPropagation();
   console.log("fdgh");
}

function myFunction() {
   let password = document.getElementById("my-password");
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
   let email = document.getElementById("my-email").value;
   let password = document.getElementById("my-password").value;
   let isError=false;
   if (email === "") {
      isError=true;
      document.getElementById("email_span").textContent = "Please enter an email address or phone number"
   }
   else {
      document.getElementById("email_span").textContent = ""
   }
   if (password === "") {
      isError=true;
      document.getElementById("password_span").textContent = "Please enter a password"
   } else {
      document.getElementById("password_span").textContent = ""
   }
   if(!isError){
      window.location.reload();
   }
  
}
