//comentário de uma linha só
/*
comenta 
várias 
linhas
*/

//console.log - escreva do portugol
console.log("okokokokok")

//cria uma janela de alerta na págona
//alert("Teste")

var nome = "SM"
//var de variável, "nome" é opcional, e o "valor" também é opcional

console.log("O nome é:" + nome)

//cadeia = String
var texto = "Something"
console.log ( typeof(texto) )

//inteiro = number, int
console.log ( typeof(numero) )
var numero = 1989

//real = number, float
console.log ( typeof(quebrado) )
var quebrado = 1.9

//lógico = bool
console.log ( typeof(VouF) )
var VouF = true

//valor nulo
console.log ( typeof(null) )
var nulo = null

//quando você não coloca um valor na variável
console.log ( typeof(indefinido) )
var inefinido = undefined

//operadores aritiméticos
// +,-,*,/, %

var a = 10
var b = 3

console.log("Soma", a + b)
console.log("Subtração", a - b)
console.log("Multiplicação", a * b)
console.log("Divisão", a / b)
console.log("Módulo", a % b)

//Operadores lógicos
//e, ou nao
// &&, ||, ! = not

var verdade = true
var mentira = false

console.log( verdade && mentira )
console.log(verdade || mentira )
console.log ( verdade && !mentira )

//operadores relacionais
//>, <, >=, <=, ==, !=, ===, !==

var v1 = 7
var v2 = 15
var v3 = "7"

console.log (v1 > v2);
console.log (v1 < v2);
console.log (v1 >= v2);
console.log (v1 <=>v2);
console.log (v1 == v2);
console.log (v1 != v2);

console.log (v1 == v3);
//compara valor

console.log (v1 === v3);
//compara valor e tipo da variável

console.log (v1 !== v2);
//compara valor e tipo

// interção com o usuário via comando prompt
var num = prompt ("Digite um número: ")
var num2 = prompt ("Digite outro número: ")

var resultado = num + num2
prompt ("O resultado é: ", resultado)