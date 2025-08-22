//Arrays para guardar informações
var alunos = []
var notasA = []
var notasB = []

//guardar as informações vindas do usuário
function cadastro (){
    for(var i = 0; i < 3; i++){
alunos [i] = prompt("Digite o nome do aluno:")
    notasA[i] = Number (prompt("Digite a primeira nota:"))
    notasB[i] = Number (prompt("Digite a segunda nota:"))
    }
}
 
//calcular média
function media(nota1, nota2){
let mediacalculada = ((nota1 * 0.4) + nota2 * 0.6)
return mediacalculada
}

//médias: aprovado >= 7, recuperação < 7 e reprovado >= 5
function situacao(mediafinal){
if (media >= 7) {
return "Aprovado"
} 
else if(mediafinal <7 && mediafinal >= 5){
    return "em recuperação"
}
else{
return "Reprovado"
}
}

//função que mostra os resultados
function mostaresul (){
for(var index in alunos){
let notaPri = notasA[index] //pega a primeira nota e guarda, vinda do array notasA
let notaSeg = notasB[index] //pega a segunda nota e guarda, vinda do array notasB
let mediaAtual = media(notaPri, notaSeg) //manda as notas pra funcao de media
let status = situacao (mediaAtual) // descobre a situação de acordo com a media
console.log("O aluno: ", alunos[index], " teve média de: ", mediaAtual);
console.log("O status dele é de: ", status);
}
}

cadastro()
mostraresul()