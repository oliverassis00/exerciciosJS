// 1. Crie um array com 5 números e imprima no console.

// let numeros = [1, 2, 5, 10, 11];

// for (let i = 0; i < numeros.length; i ++) {
//     console.log(numeros[i]);
// }

// 2. Adicione um número ao final do array usando .push() e outro no início usando .unshift().

// let numeros = [1, 2, 5, 10, 11];

// numeros.push(25);
// numeros.unshift(50);

// for (let i = 0; i < numeros.length; i ++) {
//     console.log(numeros[i]);
// }

// 3. Remova o primeiro e o último elemento do array usando .shift() e .pop().

// let numeros = [1, 2, 5, 10, 11];

// numeros.push(25);
// numeros.unshift(50);

// numeros.shift()
// numeros.pop()

// for (let i = 0; i < numeros.length; i ++) {
//     console.log(numeros[i]);
// }

// 4. Imprima o tamanho do array usando .length.

// let numeros = [1, 2, 5, 10, 11];

// numeros.push(25);
// numeros.unshift(50);

// numeros.shift()
// numeros.pop()

// console.log(numeros.length)

// 5. Use .includes() para verificar se um número específico está presente no array.

    // let numeros = [1, 2, 5, 10, 11];

    // numeros.push(25);
    // numeros.unshift(50);

    // numeros.shift()
    // numeros.pop()

    // console.log(numeros.includes(3))



// 2️⃣ Intermediário

// Crie um novo array com todos os números multiplicados por 2 usando .map().
    
    // const numeros = [1, 2, 5, 10, 11];

    // console.log(numeros.map( numeros => numeros * 2));


// Filtre apenas os números pares do array usando .filter().

    // const numeros = [1, 2, 5, 10, 11];

    // console.log(numeros.filter(num => num % 2 == 0));

// // Use .reduce() para somar todos os números do array.

//     const numeros = [1, 2, 5, 10, 11];

//     console.log(numeros.reduce((acumulador, atual) => acumulador + atual, 0));

// 3️⃣ Avançado

// // Encontre o primeiro número maior que 10 usando .find().

//     const numeros = [1, 2, 5, 10, 11];

//     console.log(numeros.find(numero => numero > 2));

// Verifique se todos os números são positivos usando .every().

// // Encontre o primeiro número maior que 10 usando .find().

//     const numeros = [1, 2, 5, 10, 11];

//     console.log(numeros.every(numero => numero > 0));

// Desafio
    // const users = [
    // { name: "Alice", age: 25, active: true },
    // { name: "Bob", age: 30, active: false },
    // { name: "Charlie", age: 35, active: true },
    // { name: "David", age: 28, active: false },
    // ];

// Filtrar apenas os usuários ativos.

// console.log(users.filter(users => users.active));

// Criar um novo array contendo apenas os nomes dos usuários ativos.
    // const ativos = users.filter(user => user.active).map(user => user.name);   
    // console.log(ativos);

// Calcular a média de idade dos usuários ativos.


// Verificar se existe algum usuário com mais de 40 anos.