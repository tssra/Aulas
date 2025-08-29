var produto1 = {
    nome: "Coca cola",
    categoria: "bebidas",
    tamanhos:["200ml", "lata", "600ml", "2L"],
    quantidade: 7,
    descricao: function(){
        //o produto X é da categoria X
        console.log("O produto ", this.nome, "é da categoria", this.categoria)
    }
}
// console.log(produto1)
produto1.descricao()

var produto2 = {
    nome: "Doce de leite",
    categoria: "Doce",
    tamanhos:["100g", "200g", "360g", "500g"],
    quantidade: 15,
    descricao: function(){
        //o produto X é da categoria X
        console.log("O produto ", this.nome, "é da categoria", this.categoria)
    },
    vertmhs: opcoes
}
//mostrar o uso do this internamente
// produto1.desccricao()
// produto2.descricao()

function opcoes(){
    let tmh =""
    // console.log("No início: ", tmh)
    for (index in this.tamnahos){
    //  tmh += this.tamanhos[index] + ", "
     console.log(tmh)
    }
    // console.log("No fim: ", tmh)
    console.log("As opções de tamanho são: ", tmh)
}

produto1.vertmhs
produto2.vertmhs