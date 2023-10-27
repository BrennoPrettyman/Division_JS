alert("Bem-Vindo ao Divisor")

let numerador = Number (prompt("Digite o Numerador:  "))
let denominador = Number (prompt("Digite o Denominador:  "))

if (denominador == 0 )
{
    alert("Não é possivel dividir por 0")
}

else {
    let resultado = (numerador / denominador)
    alert(`${numerador} dividido por ${denominador} é igual a: ${resultado}`)
}
