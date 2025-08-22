senha = prompt("Digite sua senha:")
inicio()

function inicio(){
if(senha = 1234){
   prompt("Seja bem-vindo!")
   var operacao = prompt("Qual operação você deseja realizar? (Saque ou Depósito? Digite S ou D")
   var saldo = 1000

   switch (operacao){ //operações

    case "S":
    var saldoS = prompt("Qual valor você deseja sacar? Você tem 1000 reais.")
    saldo = saldo - saldoS
    break //finished

    case "D":
    var Number(saldoD) = prompt("Qual valor você deseja depositar?")
    saldo = Number(saldo) + Number(saldoD) //ta meio wrong
    break
   }

   prompt("Seu saldo agora é de R$", saldo)

   continuar()
}

else{
    prompt("Senha inorreta.")
}
}
function continuar(){
    var opc = prompt("Deseja continuar a operação? Digite S para sim.")

    if(opc = "S"){
again()
    }
}

function again(){
inicio()
}

//parou de funcionar