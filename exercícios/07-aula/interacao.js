function quemmechamou(individuo){
console.log(individuo)
console.log("Class: ", individuo.class)
console.log("Id: ", individuo.id)
console.log("Name: ", individuo.name)
console.log("Valor: ", individuo.value)
}

function trocatexto(elementoquechamou){
//   console.log(elementoquechamou)
let textoold = document.getElementById
("textopratrocar")

//usar o innerhtml p substituir o que tava dentro do textoold, pro valor que está na caixinha do elemento que chamou a função
textoold.innerHTML = elementoquechamou.value
}

functiontroca(elementoquechamou){
    let old = document.getElementById("textooutro")
    old.innerHTML = elementoquechamou.value
}

function corrosa(elemento){
elemento.style.color = "pink"
elemento.style.fontSize = "60px"
}

function coramarelo(elemento){
elemento.style.color = "yellow"
elemento.style.fontSize = "20px"
}