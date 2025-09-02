//exercício 1
var pessoa = {
nome: "Gregory",
idade: 27
}
//exercício 2
console.log(pessoa.nome)

//exercício 3
pessoa.idade = 30
console.log(pessoa.idade)

//exercício 4
var novo = "cidade"
pessoa[novo] = "Brasília"
console.log(pessoa)

//exercício 5
function apresentar (){
    console.log("Olá, meu nome é", pessoa.nome, "e tenho", pessoa.idade, "anos")}
apresentar()

//exercício 6
var turma = [
 aluno1 = {
  nome: "Joana",
  nota: 8
 },

 aluno2 = {
 nome: "Marcos",
  nota: 6
 },

 aluno3 ={
  nome: "Keity",
  nota: 7
 }
]
 for(var i = 0; i < 3; i++){
console.log(turma[i].nome, "teve a nota de", turma[i].nota)

}
