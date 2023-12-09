/* 
1. Crie variáveis que capturem os valores que a usuária inserir e manipule-os nas funções 
2. Exibir o resultado na tela
*/

const botaoSubtrair = document.getElementById("subtrair")
const botaoMultiplicar = document.getElementById("multiplicar")
const botaoDividir = document.getElementById("dividir")

function somar() {
    const numero1 = parseFloat(document.querySelector("#numero1Soma").value)
    const numero2 = parseFloat(document.querySelector("#numero2Soma").value)

    const resultado = numero1 + numero2

    document.querySelector("#resultadoSoma").innerHTML = resultado
    
}

function subtrair() {
    const numero1 = parseFloat(document.querySelector("#numero1Sub").value)
    const numero2 = parseFloat(document.querySelector("#numero2Sub").value)

    const resultado = numero1 - numero2

    document.getElementById("resultadoSub").innerText = resultado
}


function multiplicar() {
    const numero1 = parseFloat(document.querySelector("#numero1Mult").value)
    const numero2 = parseFloat(document.querySelector("#numero2Mult").value)

    const resultado = numero1 * numero2

    document.querySelector("#resultadoMult").innerHTML = resultado
}

function dividir() {
    const numero1 = parseFloat(document.querySelector("#numero1Div").value)
    const numero2 = parseFloat(document.querySelector("#numero2Div").value)

    const resultado = numero1 / numero2

    document.querySelector("#resultadoDiv").innerHTML = resultado
}

botaoSubtrair.addEventListener("click", subtrair)
botaoMultiplicar.addEventListener("click", multiplicar)
botaoDividir.addEventListener("click", dividir)