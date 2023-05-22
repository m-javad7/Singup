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