const button = document.getElementById("button-submit")
const paragraph = document.getElementById("paragraph")




const validation = () => {


    const inputName = document.getElementById("input-name")
    const inputEmail = document.getElementById("input-email")

    const icon1 = document.getElementById("icon-check1")
    const icon2 = document.getElementById("icon-check2")

    const iconAlert1 = document.getElementById("icon-alert1")
    const iconAlert2 = document.getElementById("icon-alert2")


    if (!inputName.value || !inputEmail.value) {
        inputName.classList.add("invalid");
        iconAlert1.classList.add("visible");
        icon1.classList.remove("visible");

        inputEmail.classList.add("invalid");
        iconAlert2.classList.add("visible");
        icon2.classList.remove("visible");

    }
    if (inputName.value || inputEmail.value) {
        inputName.classList.remove("invalid");
        iconAlert1.classList.remove("visible");
        icon1.classList.add("visible");
        inputName.classList.add("ativo");

        inputEmail.classList.add("ativo");
        inputEmail.classList.remove("invalid");
        iconAlert2.classList.remove("visible");
        icon2.classList.add("visible");

    }
    if (!inputName.value && inputEmail.value) {
        inputName.classList.add("invalid");
        iconAlert1.classList.add("visible");
        icon1.classList.remove("visible");

    }
    if (inputName.value && !inputEmail.value) {
        inputEmail.classList.add("invalid");
        iconAlert2.classList.add("visible");
        icon2.classList.remove("visible");

    }
    password()
}

const password = () => {
    const inputPassword = document.getElementById("input-password")
    const inputPassword2 = document.getElementById("input-password2")

    const icon3 = document.getElementById("icon-check3")
    const icon4 = document.getElementById("icon-check4")

    const iconAlert3 = document.getElementById("icon-alert3")
    const iconAlert4 = document.getElementById("icon-alert4")

    if (!inputPassword.value || !inputPassword2.value) {
        inputPassword.classList.add("invalid");
        iconAlert3.classList.add("visible");
        icon3.classList.remove("visible")

        inputPassword2.classList.add("invalid");
        iconAlert4.classList.add("visible");
        icon4.classList.remove("visible");

    }
    if (inputPassword.value || inputPassword2.value) {
        if (inputPassword.value === inputPassword2.value) {
            paragraph.innerHTML = " "

            inputPassword.classList.add("ativo")
            inputPassword.classList.remove("invalid");
            iconAlert3.classList.remove("visible");
            icon3.classList.add("visible");


            inputPassword2.classList.add("ativo");
            inputPassword2.classList.remove("invalid");
            iconAlert4.classList.remove("visible");
            icon4.classList.add("visible");

        }

    }
    if (inputPassword.value <= 7 || inputPassword2.value <= 7 || inputPassword.value !== inputPassword2.value) {
        paragraph.innerHTML = "Senha não confere"
        paragraph.style.color = "red"

        inputPassword.classList.add("invalid");
        iconAlert3.classList.add("visible");
        icon3.classList.remove("visible");
        inputPassword.classList.remove("ativo")

        inputPassword2.classList.add("invalid");
        iconAlert4.classList.add("visible");
        icon4.classList.remove("visible");
        inputPassword2.classList.remove("ativo");


    }
}

button.addEventListener("click", validation)