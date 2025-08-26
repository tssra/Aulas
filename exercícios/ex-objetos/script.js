//ex. 1
var carro = {
marca: "BMW",
modelo: "M3",
ano: 1970
}

console.log(carro) // falta

//ex.2
console.log(carro.marca)
carro.ano = 2023

var novapropri = "cor"
carro[novapropri] = "cinza"

//ex.3
var pessoa = {
nome: 'Samira',
idade: 23,

 apresentar: function (){
    console.log("Olá, meu nome é", pessoa.nome, "e tenho ", pessoa.idade, "anos")},
}
pessoa.apresentar()
