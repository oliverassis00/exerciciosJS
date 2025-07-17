// // 1️⃣ (Fácil)
// // Cria duas variáveis booleanas: temPasse e temDinheiro.
// // Exibe “Pode entrar” se as duas forem verdadeiras, senão “Negado”.

// let temPasse = true;
// let temDinheiro = false;

// if (temPasse && temDinheiro == true) {
//     console.log("Pode Entrar!");
// } else {
//     console.log("Negado!")
// }

// // 2️⃣ (Fácil)
// // Pede pro usuário digitar um valor via prompt.
// // Exibe “Entrada vazia” se o valor for vazio, usando operador !.

// const prompt = require('prompt-sync') ();

// let digiteAlgo = prompt("Digite qualquer valor: ");

// if (digiteAlgo =! "") {
//     console.log("Você digitou algo!")
// } else {
//     console.log("Entrada vazia!");
// }

// // 3️⃣ (Médio)
// // Cria uma função que recebe a idade e se tem autorização dos pais (boolean).
// // Retorna true se a idade for ≥ 18 ou tiver autorização.

// const idade = (idade, autorizacao) => idade>=18 && autorizacao == true;

// console.log(idade(10, true));

// // 4️⃣ (Médio)
// // Declara uma variável com const e tenta mudar o valor depois.
// // Anota o erro que aparece no console.


// const testeVariavel = "Nunca Muda";

// testeVariavel = "Mudando Variável";


// // 5️⃣ (Médio-Avançado)
// // Cria uma variável global com var chamada mensagem.
// // Dentro de uma função, cria uma variável local com let também chamada mensagem.
// // Exibe as duas mensagens (dentro e fora da função) e comenta a diferença.

// var mensagem = "Ola Mundo!";

// function exibindoFuncao () {
//     let mensagem = "Ola Mundo Let";

//     console.log(mensagem);
// }

// console.log(mensagem);
// exibindoFuncao();

// // Quando utilizamos Var, ela pode ser reatribuida e redeclarada... Quando utilizamos Let, ela pode ser reatribuida e nao redeclarada.


// 6️⃣ (Avançado)
// Refatora este código aplicando boas práticas (nomes claros, DRY e indentação):


// let a = 5;
// let b = 10;
// let c = 15;

// console.log("a: " + a);
// console.log("b: " + b);
// console.log("c: " + c);

// let valor1 = 5;
// let valor2 = 10;
// let valor3 = 15;

// console.log(`Valor 1: ${valor1}`);
// console.log(`Valor 2: ${valor2}`);
// console.log(`Valor 3: ${valor3}`);


// DESAFIO:

// Imagina que tu tá fazendo a lógica de uma página de login de um site:

// Pede o nome do usuário, a senha e se ele quer manter a sessão ativa (sim/não) via prompt

// Se o nome e a senha forem iguais a valores pré-definidos (ex: nome = "admin", senha = "1234"), e o usuário quiser manter a sessão (sim), exibe:
// "Bem-vindo, [nome]! Sessão mantida."

// Se estiver correto, mas não quiser manter a sessão, exibe:
// "Bem-vindo, [nome]! Sessão temporária."

// Se nome ou senha estiverem errados, exibe:
// "Usuário ou senha incorretos."

// Usa operadores lógicos complexos (&&, ||, !)

// Usa const e let com consciência

// Aplica boas práticas (nomes claros, DRY, indentação)

// // Chamada de Função para Usar Prompt
// const prompt = require('prompt-sync') ();

// // Login e Senha Padrão para Uso
// const loginUser = "admin";
// const passwordUser = "1234";

// // Pede para o Usuário digitar Login e Senha
// let digiteUser = prompt("Login: ");
// let digitePassword = parseInt(prompt("Senha: "));
// let digiteManterSessao = prompt("Manter Sessão Ativa? (0 para não/1 para sim): ");

// const login = (userName, password, sessaoAtiva) => {
//     if (userName == loginUser && password == passwordUser && sessaoAtiva == true) {
//         return `Bem-vindo, ${userName}! Sessão mantida.`
//     } else if (userName == loginUser && password == passwordUser && sessaoAtiva == false) {
//         return `Bem-vindo, ${userName}! Sessão temporária.`
//     } else if (userName != loginUser || password != passwordUser) {
//         return `Usuário ou senha incorretos.`
//     }
// }

// console.log(login(digiteUser, digitePassword, digiteManterSessao));
