let password = document.getElementById("my-password");
let email = document.getElementById("my-email");


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
