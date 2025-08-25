
function inicio(){
senha = prompt("Digite sua senha:")
if(senha = 1234){
   alert("Seja bem-vindo!")
   var operacao = prompt("Qual operação você deseja realizar? (Saque ou Depósito?) Digite S ou D")
   var saldo = 1000

   switch (operacao){ //operações

    case "S":
    var saldoS = prompt("Qual valor você deseja sacar? Você tem 1000 reais.")
    saldo = saldo - saldoS
    prompt("Seu saldo agora é de R$", saldo)
    break 

    case "D":
    var saldoD = Number(prompt("Qual valor você deseja depositar?"))
    saldo = Number(saldo) + Number(saldoD)
    prompt("Seu saldo agora é de R$", saldo)
    break
   }

continuar()

else { //erro?
 alert("Senha inorreta.")
}
}
}
function continuar(){
    var opc = prompt("Deseja continuar a operação? Digite S para sim.")

    if(opc = "S"){
     again()
    }

    else{
     console.log("Finalizado.")   
    }
}

function again(){
inicio()
}

inicio()