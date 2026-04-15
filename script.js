// Usei o parseInt para converter o numero que o usuário comentar para numero inteiro
let numberUm = parseInt(prompt("Escreva um numero par:"));

// usei o isNaN para caso o usuário não escreva um numero
// IF e ELSE serve para dar alternativas diferentes, se for isso, não vai ser aquilo
if (isNaN(numberUm)) {
    alert("Você não digitou um numero")
} else {
    if (numberUm %2 == 0) {
    alert("Seu numero é par!")
} else {
    alert(" Seu numero não é par!")
}
    
}