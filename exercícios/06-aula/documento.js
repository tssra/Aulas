//objeto window = janela do navegador

// console.log(window.alert())
// window.prompt("Me diz um nome")

//objeto document = código html do site
console.log(document)
console.log(document.head)
console.log(document.body)


//acessando elementos do html
//por tag, class e id
var titulos = document.getElementsByTagName
("h1")
console.log(titulos)

var paragrafos = document.getElementsByClassName ("para")
console.log(paragrafos)

var achado = document.getElementById
console.log(achado)

//modificando elemento da lista de achados pela tag
titulos[1].style.color = "green" 
titulos[2].style.backgroundColor = "pink" 

//modificando elemento da lista de achados pela class
paragrafos[0].style.fontSize = "45px"
paragrafos[0].style.fontWeight = "bold"

//modificando elemenro achado pelo id
achado.innerText = "tabua"
achado.innerHTML = "<h2> Novo Texto </h2>"

function cliquei(){
    console.log("Parabéns, ganhou 1k de reais. no bano imobiliario")
}