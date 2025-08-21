//laços de repetição
//para = for
// ela tem como acabar, limitado
//sabe quantas vezes vai repetir

// for(var i = 0; i < 5; i++){
//     console.log("ainda")
// }

// console.log("Fim");

//enquanto = while
// nn tem como acabar, ilimitado
//não sabe quantas vezes vai repetir

// var contagem 
// while(contagem < 10){
//     console.log("repetição infinitamente");
//         contagem++
// }

//ex1
// var numeroescolha = prompt("Digite um número:")
// for(var i = 0; i < numeroescolha; i++){
//     alert(i)
// }

//ex2
// var senha = 0

// while(senha != "7"){
//     var senha = prompt("Digite sua senha (contagem crescente):")
//     alert("senha incorreta")
// }

// console.log("Você entrou!")

//Funções
//isso cria a função
// function bemvindo(){
//     var nome = prompt("Nome: ")
//     console.log("Olá,", nome)
// }

// //isso chama a função
// bemvindo()

// //função com parâmetro
// function calcularidade(idade){
//     alert("Sua idade é: " + idade)
// }

// calcularidade(18)

//ex dos valores
// function maior(valor1, valor2){
// if (valor1 > valor2){
//     console.log("O primeiro valor é maior")}
//     else if(valor1 > valor2){
// console.log("O segundo valor é maior")
//     }
//     else{
//         console.log("Os valores são iguais")
//     }
// }

var numero1 = prompt("Digite o primeiro número: ")
var numero2 = prompt ("Digite o segundo número: ")

maior(number(valor1), number(valor2))

//funções com retorno
function soma(valor1, valor2){
    let resultado = valor1 + valor2
    return resultado
}
var valorsomado = soma(7,6)
console.log("A soma deu: ", valorsomado)