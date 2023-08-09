
let slider = document.querySelector("#slider")
let button = document.querySelector('#button')
let size = document.querySelector('#valor')
let password = document.querySelector('#pass')
let container = document.querySelector('#container-password')

let charset = "abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWYXZ1234567890"

let novaSenha = " ";

slider.oninput = function(){
    size.innerHTML = this.value
}

function generatePass(){

    let pass = "";

    for(i = 0, n = charset.length; i < slider.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    container.classList.remove("hide")
        password.innerHTML = pass;
        novaSenha = pass;
}

function copyPass(){
    navigator.clipboard.writeText(novaSenha);
}

