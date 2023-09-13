
let isError = false;

function isValidEmail(email) {
    // Use a regular expression to validate email format
    // This is a simple example; you can use a more comprehensive regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Check if the phone contains only numbers and has a desired length
    // This is a simple example; you can adjust it based on your requirements
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phone) && phone.length === 10; // Assuming 10-digit phone number
}


function handleSubmit() {
    let nameValue = document.getElementById("name").value;
    if (nameValue == "") {
        isError = true
        document.getElementById("nameSpan").textContent = "*This field should be filled"
    } else {
        document.getElementById("nameSpan").textContent = ""
    }
    let subjectValue = document.getElementById("subject").value;
    if (subjectValue == "") {
        isError = true
        document.getElementById("subjectSpan").textContent = "*This field should be filled"
    } else {
        document.getElementById("subjectSpan").textContent = ""
    }
    let emailValue = document.getElementById("email").value;
    if (emailValue == "") {
        isError = true
        document.getElementById("emailSpan").textContent = "*This field should be filled"
    } else if (!isValidEmail(emailValue)) {
        isError = true
        document.getElementById("emailSpan").textContent = "*This field should be in the format of email"
    } else {
        document.getElementById("emailSpan").textContent = ""
    }
    let phoneValue = document.getElementById("phone").value;
    if (phoneValue == "") {
        isError = true
        document.getElementById("phoneSpan").textContent = "*This field should be filled"
    } else if (!isValidPhone(phoneValue)) {
        isError = true
        document.getElementById("phoneSpan").textContent = "*This field should only contain numbers"
    } else {
        document.getElementById("phoneSpan").textContent = ""
    }

    let textValue = document.getElementById("textarea").value;
    if (textValue == "") {
        isError = true
        document.getElementById("textAreaSpan").textContent = "*This field should be filled"
    }
    else {
        document.getElementById("textAreaSpan").textContent = ""
    }

    if (!isError) {

        const formData = new FormData();
        formData.append('name', nameValue);
        formData.append('subject', subjectValue);
        formData.append('email', emailValue);
        formData.append('phone', phoneValue);
        formData.append('textarea', textValue);


        fetch("https://script.google.com/macros/s/AKfycbzEZXwM8Q-8uzCcWHHrRoUaCMmIIZSCTrCnQCUiHyv6iy8m9A3E40reicK6mrPao_u7/exec", {
            method: "POST",
            body: formData
        }).then((res) => res.text())
            .then((data) => console.log(data))
            .then(()=> {
                window.location.reload()
            })
            .catch(err => console.log(err));
console.log("dingan")
      

    }
}

console.log("par -1")
const fn = (cB) => {
    setTimeout(() => {
        cB()
    }, 0)

}
fn(() => console.log("hi paru"))

console.log("par - 2")


