//interação com o usuário via prompt
/*var nome = prompt ("Digite um nome: ")

alert ("Seu nome é: " + nome)*/

//condicionais
//se, senão se, senão
// if, if else, else

// var estaVivo = true

// if (estaVivo == true){
//     console.log("Parabéns, você está vivo")
// }

// else if (estaVivo = false){
//     console.log("Infelizmente, você não está vivo")
// }

// else{
//     console.log("Você não está nada (??)")
// }

// escolha, caso
//switch, case

// var corCamisa = "Verde"

// switch (corCamisa){
//     case "Azul":
//         console.log("Você ganhou voucher")
//         break 
//     case "Amarela":
//         console.log("Você ganhou body splash")
//         break 
//     case "Vermelha":
//         console.log("Você ganhou um brinde")
//         break 
//         deufault:
//         console.log("Cor de camisa inválida")
//         break
// }

//atividade da média
// 5 p baixo
// recuperacao 5 p 6
// aprovaçao 6 p cima
/*var nota = prompt ("Digite sua nota: ")

if (nota > 6 ){
console.log ("Você está aprovado!")
}

else if (nota >= 5 && nota <= 6){
    console.log("Você esá de recuperação!")
}

else{
    console.log("Você está reprovado!")
}*/


//exercício do cinema

var idade = prompt ("Digite a idade 1:")
var idade2 = prompt("Digite a idade 2")

var ingresso1, ingresso2

//definir o valor do primeiro ingresso
if (idade1 <= 17){
ingresso1 = 15
}

else if (idade1 >= 18 && idade1 < 60){
ingresso1 = 30
}

else{
ingresso1 = 20
}

//definir valor do segundo ingresso
if (idade2 <= 17){
ingresso2 = 15
}

else if (idade2 >= 18 && idade2 < 60){
ingresso2 = 30
}

else{
ingresso2 = 20
}

var final = ingresso1 + ingresso2
console.log("O preço final foi " + final)