const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [4500.2, 29.9]
    }
  ];

function calculaSaldo(receitas, despesas){
    const receitaTotal = somaNumeros(receitas);
    const despesaTotal = somaNumeros(despesas);

    return receitaTotal - despesaTotal;
}

function somaNumeros(numeros){
    let total = 0;
    for (let numero of numeros){
        total += numero;
    }
    return total;
}

function saldoSituacao(saldo){
    if (saldo >= 0) {
        return "POSITIVO";
    }
    else{
        return "NEGATIVO";
    }
}

for (let usuario of usuarios) {
    
    const {nome, receitas, despesas} = usuario;
    const saldo = calculaSaldo(receitas, despesas)
    const situacao = saldoSituacao(saldo);
    
    console.log(`${nome} possui saldo ${situacao} de ${saldo}`);
    
}