function myFunction() {
    let text = document.getElementById("my-password");
     if(text.type=="password"){ 
        document.getElementById("visibility").innerHTML = "Hide";
     text.type="text";
    console.log(text.value);
    }else{
     text.type="password";
     document.getElementById("visibility").innerHTML = "Show";

    
}
}