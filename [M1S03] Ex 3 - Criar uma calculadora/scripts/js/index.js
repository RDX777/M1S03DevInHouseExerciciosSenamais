window.onload = () => {

    var numeroA = parseInt(prompt("Digite um numero:", 0))

    var operacao = prompt("Digite a operacao", "+")

    var numeroB = parseInt(prompt("Digite outro numero:", 0))

    switch (operacao) {
        case "+":
            console.log(numeroA + numeroB)
            break
        case "-":
            console.log(numeroA - numeroB)
            break
        case "*":
            console.log(numeroA * numeroB)
            break
        case "/":
            console.log(numeroA / numeroB)
            break
        default:
            console.log("Operador Invalido");
    }



}