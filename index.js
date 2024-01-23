const form = document.querySelector("form");
const emailInput = document.querySelector("email");
const passwordInput = document.getElementById("password"); 
const button = document. getElementById('myButton');
debugger
form.addEventListener = (function (event = click){
    event.preventDefault();
})

    //verifica se o email esta preenchido e se é valido
    if(email.value === "" || !isEmailValid(email.value)){
        alert("Insira endereço de e-mail");
    }

    //verifica se a senha esta preenchida
    if (!validatePassword((passwordInput.value))) {
        alert("A senha precisa ter no mínimo 8 dígitos.");
}

    //Enviar se tudo estiver preenchido
    form.getElementsByTagName("myButton");


//função de validação de e-mail
function isEmailValid(email){
    //regex de validação
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }
    return false;
}   

//funcção de validação de senha
function validatePassword(password, minDigits=8) {
    if (password.length >= minDigits ) {
      // senha válida
    return true;
    }
    // senha inválida
    return false;
}

//Se e-mail e senha estiverem preenchidos, mandar para outra pagina ao clicar em Sign In


