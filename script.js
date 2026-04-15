let alturaUm = Number(prompt("Quantos metros você tem?:"));

// usei o isNaN para reconhecer se o usuário usou um numero ou não
// o IF eELES serve para ter duas alternativas, se é isso não é aquilo 
if (isNaN(alturaUm)) {
    alert("Por favor digite um numero")
} else { 
    if (alturaUm >= 1.40) {
    alert("Você pode entrar no brinquedo")
} else {
    alert("Você não tem altura o suficiente par ir no brinquedo,")
}
    
}



   
