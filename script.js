let valorUm = Number(prompt("Escreva um quanto deu a sua compra:"));

if (isNaN(valorUm)) {
    alert("Por favor insira um numero!!!")
} else {
    if (valorUm >= 150) {
        alert(`como seu valor foi acima de R$ 150,00 você recebeu um desconto de 2%, sua compra ficou em um total de ${(valorUm - valorUm*2/100).toFixed(2)} reais`)
    } else {
        alert(`como sua compra ficou abaixo de R$ 150,00 você receberá um cashback de ${(valorUm*2/100).toFixed(2)} reais, use-o na sua proxima compra `)
    }
}



   
