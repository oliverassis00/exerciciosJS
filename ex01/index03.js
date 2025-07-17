// // 1️⃣ (Fácil) – Truthy / Falsy
// // Cria uma variável chamada entrada e atribui a string vazia "".
// // Faz um if pra verificar se ela é "falsy" e exibe:

// // "Entrada vazia" se for falsy

// // "Entrada preenchida" se não for

// let entrada = " ";

// if (entrada !== " ") {
//     console.log("Entrada Preenchida!");
// } else {
//     console.log("Entrada Vazia!");
// }

// 2️⃣ (Fácil-Médio) – Operadores lógicos encadeados
// Cria 3 variáveis booleanas: temCarteira, temIdadeOk e estaAcompanhado.
// Exibe "Pode entrar" se:

// tiver carteira e idade ok

// ou estiver acompanhado

// let temCarteira = false;
// let temIdadeOk = false;
// let estaAcompanhado = true;


// if (temCarteira && temCarteira || estaAcompanhado) {
//     console.log("Pode Entrar!");
// } else {
//     console.log("Não Pode Entrar!")
// }

// // 4️⃣ (Médio) – Escopo de bloco vs função
// // Cria uma variável var nome = "Oliver" fora de uma função.
// // Dentro da função, cria let nome = "Outro Nome".
// // Exibe o nome dentro e fora da função e comenta qual é exibido e por quê.

// var nome = "Oliver";

// function mudancaNome () {
//     let nome = "Outro Nome";

//     console.log(nome);
// }

// mudancaNome();
// console.log(nome);

// // 5️⃣ (Médio-Avançado) – var vs let vs const
// // Declara uma variável var fora de um if.
// // Dentro do if declara outra com let com o mesmo nome.
// // Exibe o valor dentro e fora do if e observa o que acontece.
// // Faz o mesmo com const.
// // (Assim tu vê bem o escopo de bloco de let/const e escopo de função do var)

// // var nome = "Var";
// // let condicao = true;

// // if (condicao) {
// //     let nome = "Let";
// //     console.log(nome);
// // }
 
// // console.log(nome);


// const nome = "test-fora";

// if (condicao) {
//     const nome = "test-dentro";
//     console.log(nome);
// }

// console.log(nome);

// 6️⃣ (Avançado) – DRY + validação
// Pede o nome e a idade do usuário (via prompt).
// Cria uma função validaEntrada que recebe um texto e verifica se está vazio ou não.
// Usa essa mesma função para validar tanto o nome quanto a idade.
// Exibe "Campo obrigatório" se algum estiver vazio.

const prompt = require('prompt-sync') ();

let nome = prompt("Digite o nome do usuário: ");
let idade = parseInt(prompt("Digite a idade: "));

function validaEntrada (nome, idade) {
    if(nome !== " " && idade !== " ") {
        return `Entrada Liberada!`;
    } else {
        return `Campo Obrigatório`;
    }
}

console.log(validaEntrada(nome, idade));