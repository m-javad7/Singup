//check FirstName
const checkFirstName = () => {
    let input_text = document.querySelector("#fname");
    let fnameEror = document.querySelector(".error_msg");
    if (input_text.value.length <= 3) {
        input_text.style.border = "1px solid #f74040";
        input_text.classList.add("error_msg");
        fnameEror.textContent = "The name must be at least 3 letters long. Please try again";
        return false;
    } else {
        input_text.classList.remove("error_msg");
        input_text.style.border = "1px solid #80d084";
        fnameEror.textContent = "";
    }
}
//check Password
const checkPassword = () => {
    let isUpper = false;
    let isLower = false;
    let isNumber = false;

    let passwordInput = document.getElementById("password");
    let passwordError = document.getElementById("passwordError");
    let password = passwordInput.value;

    for (let i = 0; i < password.length; i++) {
        const character = password.charCodeAt(i);

        if (character >= 48 && character <= 57) {
            isNumber = true;
        }

        if (character >= 65 && character <= 90) {
            isUpper = true;
        }

        if (character >= 97 && character <= 122) {
            isLower = true;
        }
    }
    if ( password.length < 8) {
        passwordInput.classList.add("error_msg");
        passwordInput.style.border = "1px solid #f74040";
        passwordError.textContent = "Password must have at least 8 digits";
    }else if (!isLower) {
        passwordInput.classList.add("error_msg");
        passwordInput.style.border = "2px solid #f74040";
        passwordError.textContent = "Password should contain at least one lowercase letter";
    } else if (!isUpper) {
        passwordInput.classList.add("error_msg");
        passwordInput.style.border = "1px solid #f74040";
        passwordError.textContent = "Password should contain at least one uppercase letter";
    } else if (!isNumber) {
        passwordInput.classList.add("error_msg");
        passwordInput.style.border = "1px solid #f74040";
        passwordError.textContent = "Password should contain at least one digit";
    } else {
        passwordInput.classList.remove("error_msg");
        passwordInput.style.border = "1px solid #80d084";
        passwordError.textContent = "";
    }

    if (isUpper && isLower && isNumber && password.length >= 8) {
        console.log("Password is valid");
    }
}
//check Email
const checkEmail = () => {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const email = emailInput.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
        emailInput.classList.add("error_msg");
        emailError.textContent = "Email address is required";
        emailInput.style.border = "1px solid #f74040";
        return false;
    } else if (!emailRegex.test(email)) {
        emailInput.classList.add("error_msg");
        emailError.textContent = "Invalid email address";
        emailInput.style.border = "1px solid #f74040";
        return false;
    } else {
        emailInput.classList.remove("error_msg");
        emailInput.style.border = "1px solid #80d084";
        emailError.textContent = "";
        return true;
    }
};

