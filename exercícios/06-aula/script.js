var aluno = {
    nome : "Rodolfo",
    anoescolar : "2°",
    turma : "C",
    notas : [6, 8, 7],
    estudar : function(){
     console.log("Estou estudando")
    },
    //metedo com funcao interna 
    media : function(n1, n2, n3){
  return ((n1 + n2 + n3) / 3)
    },
    //metedocom função externa
    ocorrencias : listadeocorrencias
}
//acessa as propriedades do objeto aluno
console.log("O aluno:", aluno.nome, "está no ", aluno.anoescolar, "ano escolar.")
//executa um metodo de dentro do obj
aluno.estudar()
console.log("Média final:", aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]))
//cria função externa para utilização do obj
function listadeocorrencias(){
    console.log("Comeu na biblioteca")
    console.log("Xingou no corredor")
   console.log("Não fez o trabalho")
}


