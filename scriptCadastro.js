let dataBase = users;
console.log(dataBase)

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

function cadastro() {
    let verifica = 0;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let obj = {
        "email" : email,
        "senha" : senha
    };
    for(let i = 0; i < dataBase.length; i++){
        if(email == dataBase[i].email) {
            error("Usuário ja cadastrado!");
            return;
        }
    }

    dataBase.push(obj);
    console.log(dataBase);
}

let button = document.querySelector(".login");
button.addEventListener("click", () => {
    if (document.getElementById("email").value == "" || 
        document.getElementById("senha").value == "") {
        error("Preencha todos os campos.");
        return;
        }
    document.querySelector(".warning").innerText = "";
    cadastro(dataBase);
});

let visiblePassword = document.querySelector(".icon-button");
visiblePassword.addEventListener("click", () => {
    showPassword(check);
});