// 👉 Cria uma variável idade e outra chamada temCarteira (boolean).
// Usa operador lógico (&&) pra verificar se a pessoa tem 18 anos ou mais e tem carteira.
// Mostra “Pode dirigir!” ou “Não pode dirigir!”.

let idade = 18;
let temCarteira = true;

if (idade >= 18 && temCarteira == true) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir.")
}


// 👉 Cria duas variáveis numero1 e numero2.
// Usa operadores de comparação (>=, <=, !==) pra mostrar no console:
// Se numero1 é maior ou igual a numero2
// Se numero1 é diferente de numero2

let numero1 = "n";
let numero2 = 8;

if (numero1 >= numero2) {
    console.log(`O número ${numero1} é maior que o número ${numero2}`)
} else if (numero1 <= numero2) {
    console.log(`O número ${numero1} é menor que o número ${numero2}`)
} else if (numero1 !== numero2) {
    console.log(`O número ${numero1} é diferente do número ${numero2}`)
}



// 👉 Cria uma variável contador = 1.
// Usa while pra contar até 5 (inclusive), mostrando cada número no console.

let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador ++;
}

// 👉 Pede ao usuário um número maior que 0.
// Se o número for menor ou igual a 0, pede novamente, até digitar corretamente.
// Usa do...while!

const prompt = require('prompt-sync') ();

let digiteNumero = 0;


do {

    digiteNumero = parseInt(prompt("Digite um número maior que 0: "));
    
    console.log(`Você digitou o número ${digiteNumero}`);

} while (digiteNumero <= 0)


// 👉 Cria uma arrow function chamada dobro que recebe um número e retorna esse número multiplicado por 2.
// Exibe o resultado chamando a função.

const dobro = (numero) => numero * 2

console.log(dobro(5));

// 👉 Cria uma função anônima que soma dois números e atribui ela a uma variável chamada somar.
// Depois chama somar(3, 4) e mostra o resultado.

const somar = function (numero1, numero2) {
    return numero1 + numero2;
}

console.log(somar(2,2));

// 👉 Cria uma variável global chamada mensagem = "Oi".
// Dentro de uma função chamada alteraMensagem, cria uma variável com mesmo nome mensagem = "Olá".
// Chama a função e mostra no console a mensagem dentro e fora da função (pra ver a diferença de escopo).

let mensagem = "Oi";

function alteraMensagem () {
    let mensagem =  "Olá";

    console.log(mensagem);
}
console.log(mensagem);
alteraMensagem();

// 👉 Pede ao usuário (via prompt) dois números: inicio e fim.
// Com while, mostra todos os números do intervalo que são pares e maiores que 10.
// Usa operador lógico (&&) pra fazer essa verificação.

const prompt = require('prompt-sync') ();

let digiteInicio = parseInt(prompt("Digite o início do intervalo: "));
let digiteFim = parseInt(prompt("Digite o fim do intervalo: "));
let condição = true;

while (condição) {

    if (digiteInicio < digiteFim) {
        for (let i = digiteInicio; i <= digiteFim; i ++) {
            if(i % 2 === 0 && i >= 10){
                console.log(i);
            }
        }
    } else {
         for (let i = digiteInicio; i >= digiteFim; i --) {
            if(i % 2 === 0 && i >= 10){
                console.log(i);
            }
        }
    }

    condição = false;
}

// 👉 Cria uma função chamada calculadora que recebe dois números e uma operação (‘+’, ‘-’, ‘*’, ‘/’).
// Usa switch/case pra decidir qual operação fazer e retorna o resultado.
// Chama a função e exibe o resultado.

const prompt = require('prompt-sync') ();

let digiteNumero1 = parseInt(prompt("Digite o primeiro número: "));
let digiteNumero2 = parseInt(prompt("Digite o segundo número: "));
let digiteOperacao = prompt("Digite uma operação (+, -, *, /): "); 

function calculadora (numero1, numero2, operacao) {

    switch (operacao) {

        case '+': 
            return numero1 + numero2;
            break;

        case '-':
            return numero1 - numero2;
            break;
        
        case '*':
            return numero1 * numero2;
            break;
        
        case '/':
            return numero1 / numero2;
            break;
            
        default: 
            return `Você inseriu caracteres inválidos!`;
            break;
    }

}


console.log(calculadora(digiteNumero1, digiteNumero2, digiteOperacao));

