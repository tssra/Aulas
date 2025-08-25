console.log("lala")

//com array

var alunos = ["Pedro", "Tiago", "João"]
var media = [7,8,6]

console.log("O aluno: ", alunos[1], "teve média: ", media[1])

//com objeto
var estudante = {
    nome : "Cristiano", //primeiro é a chave e depois valor
   nota1 : 8,
  nota2 : 9,
  media : 8.5
}

console.log(estudante.nome)
console.log(estudante.nota1)
console.log(estudante.nota2)
console.log(estudante.media)
console.log(estudante.nome, "=", estudante.media)

var obj = {
    nome : "borracha",
   textura : "áspera",
  dureza : 3.2,
  tamanho : 4
}
//para conseguir acessar
console.log(obj.nome)
console.log(obj.textura)
console.log(obj.dureza)
console.log(obj.tamanho)

//outra forma de acessar
console.log("O Tamanho:", obj ["tamanho"])

//criando um objeto vazio
var grrafa = {
    cor : "vermelha",
    material : "vidro"
}

var garrafa = {}
console.log(garrafa)
garrafa.preco = 12.5
garrafa.cor = vermelho
garrafa.tamanho = 2
garrafa.["validade"] = "1 ano"
console.log(garrafa)

garrafa.preco = 12.0
garrafa.["validade"] = "2 anos"
console.log(garrafa)

//criando uma nova propriedade
var novapropri = "apelido"
garrafa[novapropri] = aris
console.log(garrafa.apelido)

//criar funções
var animal = {
    nome: "Duck",
    especie: "cachorro",
    raca: "pinscher",
    andar: function (){
    console.log("Estou andando")},
    latido: function (){
console.log("O cachorro está latindo")
    }
}

console.log("O nome é: ", animal.nome)
animal.andar() //é uma função, tem que ser chamada corretamente
animal.latido()