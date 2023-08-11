let slider = document.querySelector("#slider")
let size = document.querySelector("#valor")
let gerador = document.querySelector("#gerador") 
let senha = document.querySelector("#senha")
let container = document.querySelector("#container-senha")

let charset = "abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWYXZ1234567890"
let novaSenha = " ";

size.innerHTML = slider.value

slider.oninput = function(){
    size.innerHTML = this.value
}

function generatePass(){
    let pass = "";

    for(let i = 0, n = charset.length; i < slider.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() *n));
     }
     container.classList.remove('hide');
     senha.innerHTML = pass;
     novaSenha = pass;
}

function clickCopy(){
    navigator.clipboard.writeText(novaSenha);
}

