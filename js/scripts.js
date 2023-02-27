const form = document.querySelector("#form")
const nameInput = document.querySelector("name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelector = document.querySelector("#job")
const messageTextrea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

        //Verifica se o nome está vazio
    if(nameInput.value === "") {
        alert("Por favor, preencha seu nome")
        return;
    }
    // Se o e-mail estiver preenchido e se é válido 
if(emailInput.value === "" || !isEmailvalid(emailInput.value)) {
    alert("Por favor preencha o seu e-mail");
    return;
}
// verifica se a senha está preenchida
if(!validaPassword(passwordInput.value, 8)) {
alert("A senha precisa de no mínimo 8 dígitos.")
}

// Verifica se a situação foi selecionada 
if(jobSelect.value === "") {
    alert("Por favor, selecione a sua situação")
    return;
}

// Verificar a menssagem preenchida
if (jobSelect.value === "") {
    alert("Por favor, Escreva uma menssagem")
    return;
}
    // Se todos os campos estivessem corretamente preenchidos, envie o form
    form.submit();
});

    // Função que valida e-mail
function isEmailvalid(emai) {

    //Cria uma regex para validar e-mail
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.text(email)) {
        return true;
    }

    return false;
}

// Função valida a senha
function validaPassword(password, minDigits){
    if(password.length >= minDigits) {
        // Senha válida
        return true
    }

    // Senha imválida
    return false
}