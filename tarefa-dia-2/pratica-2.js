// Este é um comentário no código. Comentários não são executados, eles servem pra gente deixar alguma mensagem
// para outras pessoas que forem ler o código. Agora vamos para o exercício.

// Analise os 10 comandos 'if' a seguir e tente prever qual mensagem será exibida na tela.
// Fique à vontade de rodar o código para verificar se suas respostas estão corretas. 

let a = 10

// Escreva depois dos ':' se vai entrar no 'if' ou no 'else' ('if' se entrar no 'if' e 'else' se entrar no 'else'): Se a for igual a 10 é verdaderio se não é falso.           
if (a == 10) { 
console.log("Verdade! O valor ", a, " é igual a 10");
} else { 
    console.log("Falso! O valor ", a, " não é igual a 10");
}

// Escreva depois dos ':' se vai entrar no 'if' ou no 'else' ('if' se entrar no 'if' e 'else' se entrar no 'else'): se o valor a for maior que 10 então è verdadeiro se não a for menor que 10 é falso
if (a > 10) { 
        console.log("Verdade! O valor ", a, " é maior que 10");
} else {
    console.log("Falso! O valor ", a, " não é maior 10");
}

// Escreva depois dos ':' se vai entrar no 'if' ou no 'else' ('if' se entrar no 'if' e 'else' se entrar no 'else'): se a for menor ou igual a 10 é verdadeiro se não e falso
if (10 <= a) {
    console.log("Verdade! O valor ", a, " é maior ou igual a 10");
} else {
    console.log("Falso! O valor ", a, "não é maior ou igual a 10");
}

let b = true

// Escreva depois dos ':' se vai entrar no 'if' ou no 'else' ('if' se entrar no 'if' e 'else' se entrar no 'else'): se b for iagual a true é verdade senão e falso
if (b == true) {
    console.log("Verdade! O valor ", b, " é igual a true");
} else {
    console.log("Falso! O valor ", b, " não é igual a true");
}

// Escreva depois dos ':' se vai entrar no 'if' ou no 'else' ('if' se entrar no 'if' e 'else' se entrar no 'else'): se b for igual o valor da varialvel é verdade se não e falso
if (b) {
    console.log("Verdade! O valor ", b, " é considerado como verdade");
} else {
    console.log("Falso! O valor ", b, " não é considerado como verdade");
}

let c = []

// Escreva depois dos ':' se vai entrar no 'if' ou no 'else' ('if' se entrar no 'if' e 'else' se entrar no 'else'): se c for iagual o valor da varialvel é verdade se não é falso   
if (c) {
    console.log("Verdade! O valor ", c, " é considerado como verdade");
} else {
    console.log("Falso! O valor ", c, " não é considerado como verdade");
}

let d = [1,2,3,4]

// Escreva depois dos ':' se vai entrar no 'if' ou no 'else' ('if' se entrar no 'if' e 'else' se entrar no 'else'):  se d for iagua a 1,2,3,4 é vedarde se não e falso
if (d) {
    console.log("Verdade! O valor ", d, " é considerado como verdade");
} else {
    console.log("Falso! O valor ", d, " não é considerado como verdade");
}

// Escreva depois dos ':' se vai entrar no 'if' ou no 'else' ('if' se entrar no 'if' e 'else' se entrar no 'else'): se d 0 for iagual a 1 é verdade se não é falso 
if (d[0] == 1) {
    console.log("Verdade! O valor ", d[0], " do elemento do índice 0 da variável 'd' é igual a 1");
} else {
    console.log("Falso! O valor ", d[0], " do elemento do índice 0 da variável 'd' não é igual a 1");
}

// Escreva depois dos ':' se vai entrar no 'if' ou no 'else' ('if' se entrar no 'if' e 'else' se entrar no 'else'): se d1 é igual a 1 então e verdade se não é falso
if (d[1] == 1) {
    console.log("Verdade! O valor ", d[1], " do elemento do índice 1 da variável 'd' é igual a 1");
} else {
    console.log("Falso! O valor ", d[1], " do elemento do índice 1 da variável 'd' não é igual a 1");
}

let e = "Nome"

// Escreva depois dos ':' se vai entrar no 'if' ou no 'else' ('if' se entrar no 'if' e 'else' se entrar no 'else'): se e é igual a nome então é verdade se não é falso 
if (typeof(e) == 'string') {
    console.log("Verdade! O tipo de dado da variável 'e' é uma string");
} else {
    console.log("Falso! O tipo de dado da variável 'e' não é uma string");
}