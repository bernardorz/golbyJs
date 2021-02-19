# Desafio Semana #1

```js
// Declarar uma variável chamada `myvar`, sem valor.
let myvar

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
let soma = 15 + 8

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma += 1 //Mesma coisa que soma = soma + 1

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

soma *= 3 //Mesma coisa que soma = soma * 3;

// Qual é o valor da variável `soma` até aqui?
console.log(soma)
// Output: 72

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
let souninja = true

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'
//Comida => Array, indice 0 => 'Arroz', Indice 1 => 'Feijão' e Indice 2 => 'ovo'.
.
let comidas = ['arroz', 'feijão', 'ovo']

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
// console.log( comidas.find(comida => comida === 'feijão') )
// Output: feijão

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
soma === myvar
// Output: false
//Retorna False

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
myvar <= soma
// Output: true
//Retorna True

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.

// divisao é uma arrow function que recebe como parametro ( x, y ) e retorna ( x / y)
const divisao = (x, y) => x/y

// Invoque a função criada acima, passando os parâmetros 10 e 2.
divisao(10, 2)
// Output: 5
```
