console.log("Hi")

//VETOR = array
//um lugarpara guardar varias coisas de uma "classe"

// var alunos [finge que tem nomes aqui] 
    //deu wrong aqui

//mostra todos os elementos do array
// console.log(alunos)

//mostra uma posição específica
// console.log(alunos[2])

//troca um valor
// alunos [3] = finge que tem mais um nome aqui

//array com valores de vários tipos
// var aleat = ["Roda gigante", 8, "Frio", 7, 2, true]

// //loop pra mostrar todos os valores
// for(var i = 0; i < 6; i++){
// console.log(aleat[i])
// }

// for(var i = 0; i < aleat.length; i++){
//     console.log(aleat[i])
// }

// var cores = ["rosa", "azul", "branco", "preto"]

// for(var index in cores){
// console.log(index) //esse index é o número da caixinha
// console.log(cores[index]) //mostra o que tem dentro da caixinha
// }

//ex vetores
var nomes = ["Ella", "SZA", "Ariana", "Weeknd", "Lamar", "Doja", "Ty"]
for(var i = 0; i < 7; i--){
console.log(nomes)
}

//manipula arrays 
var frutas = ["maçã", "uva", "banana"]
console.log(frutas);

//adiciona um elemento no fim do array
frutas.push("laranja")
console.log(frutas)

//tira o  ultimo valor e retorna ele
var frutatirada = frutas.pop()
console.log(frutatirada);

//mesma coisa do pop, ao contrário. tira o primeiro valor e retorna
var firstfruta = frutas.shift()
console.log(firstfruta);

//adiciona um valor ou mai no início do array
var novafruta = "tomato"
frutas.unshift(novafruta)
console.log(frutas)