let dataBase = users;
let check = 0;

function showPassword (verificador) {
    let passwordInput = document.getElementById("senha");
    if (check == 0) {
        check = 1;
        passwordInput.type = "text";
        visiblePassword.style.backgroundImage = "url('../assets/invisible.png')";
        console.log(check);
    } else {
        check = 0;
        passwordInput.type = "password";
        visiblePassword.style.backgroundImage = "url('../assets/visible.png')";
        console.log(check);
    }
}

function error(mensagem) {
    document.querySelector(".warning").innerText = "";
    let warning = document.querySelector(".warning");
    let messageError = document.createElement("p");
    messageError.innerText = mensagem;
    warning.append(messageError);
}

function login(dataBase) {
    let verifica = 0;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    for(let i = 0; i < dataBase.length; i++){
        if(email == dataBase[i].email && senha == dataBase[i].senha) {
            window.location.href = "indexMain.html";
            return;
        }
    }
    if(verifica == 0){
        error("Email ou senha inválido.")
    }
}

let button = document.querySelector(".login");
button.addEventListener("click", () => {
    if (document.getElementById("email").value == "" || 
        document.getElementById("senha").value == "") {
            error("Preencha todos os campos.");
            return;
        }
    document.querySelector(".warning").innerText = "";
    login(dataBase);
});

let visiblePassword = document.querySelector(".icon-button");
visiblePassword.addEventListener("click", () => {
    showPassword(check);
});