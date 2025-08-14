// 1️⃣ Variáveis e Tipos
// Cria três variáveis: uma string, um number e um boolean. Depois imprime no console o tipo de cada uma usando typeof.


// let palavra = "Texto Aqui";
// let numero = 10;
// let verdadeirooufalso = true;

// console.log(typeof palavra)


// 2️⃣ Operadores e Condições
// Pede pro usuário digitar um número (via prompt) e diz se ele é par ou ímpar.

// const prompt = require('prompt-sync') ();

// let numeroUser = parseFloat(prompt("Digite um número: "))

// let resultado = numeroUser % 2 == 0 ? true : false;

// console.log(resultado)


// // 3️⃣ Loops (for)
// // Cria um for que imprime no console todos os números de 1 a 10.


// for (let i = 1; i <= 10; i ++) {
//     console.log(i)
// }


// // 4️⃣ Funções
// // Faz uma função que recebe um nome e retorna "Olá, [nome]!".

// function saudacao (nome) {
//     return `Olá, ${nome}!`;
// }


// console.log(saudacao("Oliver"));

// // 5️⃣ Arrays
// // Cria um array com 5 nomes e imprime o primeiro e o último.


// let numeroUserArray = [0, 2, 5, 10, 15];

// console.log(numeroUserArray[0], numeroUserArray[4])

// 6️⃣ Objetos
// Cria um objeto que represente um produto (nome, preço e quantidade) e imprime uma frase dizendo o nome e o valor total (preço * quantidade).

// let produto = {
//     nome: "Capinha Celular",
//     preco: 3.50,
//     quantidade: 50
// }

// console.log(`Olá, temos disponíveis o produto ${produto.nome} e o valor total do estoque R$${produto.preco * produto.quantidade}`);


// // 7️⃣ Manipulação de Strings
// // Recebe uma frase e imprime ela toda em maiúsculas.

// let fraseRecebida = "Olá, seja bem-vindo!";

// console.log(fraseRecebida.toUpperCase());



// 8️⃣ Manipulação de DOM
// Cria um botão HTML e, com JS, faz ele mudar o texto para "Clicado!" quando for pressionado.

// 9️⃣ Eventos
// Quando o usuário digitar algo em um campo <input>, mostra em tempo real esse texto em um <p> abaixo.

// 🔟 Desafio Extra (Misturando Tudo)
// Faz um programa que:

// Pede 3 números pro usuário

// Coloca eles em um array

// Ordena do maior pro menor

// Mostra no console