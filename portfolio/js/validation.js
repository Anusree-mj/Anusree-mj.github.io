
let isError="false";
function handleSubmit() {
    let nameValue = document.getElementById("name").value;
    if (nameValue == "") {
        isError="true"
        document.getElementById("nameSpan").textContent = "*This field should be filled"
    }else{
        document.getElementById("nameSpan").textContent=""
    }
    let subjectValue = document.getElementById("subject").value;
    if (subjectValue == "") {
        isError="true"
        document.getElementById("subjectSpan").textContent = "*This field should be filled"
    }else{
        document.getElementById("subjectSpan").textContent = ""
    }
    let emailValue = document.getElementById("email").value;
    if (emailValue == "") {
        isError="true"
        document.getElementById("emailSpan").textContent = "*This field should be filled"
    }else if(emailValue.type!="email"){
        isError="true"
        document.getElementById("emailSpan").textContent = "*This field should be in the format of email"
    }else{
        document.getElementById("emailSpan").textContent =""
    }
    let phoneValue = document.getElementById("phone").value;
    if (phoneValue == "") {
        isError="true"
        document.getElementById("phoneSpan").textContent = "*This field should be filled"
    }else if(phoneValue.type!="email"){
        isError="true"
        document.getElementById("phoneSpan").textContent = "*This field should only contain numbers"
    }else{
        document.getElementById("phoneSpan").textContent =""
    }
    
    let textValue = document.getElementById("textarea").value;
    if (textValue == "") {
        isError="true"
        document.getElementById("textAreaSpan").textContent = "*This field should be filled"
    }
    else{
        document.getElementById("textAreaSpan").textContent=""
    }
    if(isError=="false"){
        document.getElementById("myForm").submit();
    }
}