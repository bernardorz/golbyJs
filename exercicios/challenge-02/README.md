# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

//Soma => Arrow function que recebe (x, y) como parametros e retorna => x + y
const soma = (x, y) => x+y

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
//resultado é igual a invocação da função com os parametros(5,2) + 3
let resultado = soma(5, 2) + 3

// Qual o valor atualizado dessa variável?
// Output: 10

// Declare uma nova variável, sem valor.
let novaVariavel

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

//alterarVariavel é uma arrow function que retorna a variavel criada anteriormente com um novo valor
const alterarVariavel = () => {
    novaVariavel = "Valor"
    return console.log('Novo valor da variavel => ' + novaVariavel)
}

// Invoque a função criada acima.
alterarVariavel()

// Qual o retorno da função? (Use comentários de bloco).
// Output: O valor da novaVariável agora é VALOR.

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

//multiplicar3vars é uma arrow function que recebe como parametros x,y,z
//if(!x || !y || !z) faz a verificação se todos os parametros foram passados
//se eles não foram passados ira retornar o primeiro return
//caso estejam preenchidos ira retornar o segundo return
const multiplicar3vars = (x, y, z) => {
    if(!x || !y || !z) return "Preencha todos os valores corretamente!"
    return (x * y * z) + 2

}

// Invoque a função criada acima, passando só dois números como argumento.
const invocacaoErrada = multiplicar3vars(1, 2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
console.log(invocacaoErrada)
// Output: Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
const invocacaoCerta = multiplicar3vars(1, 2, 3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
console.log(invocacaoCerta)
// Output: 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
const randomFunction = (x, y, z) => {
    if (x && !y && !z) return x
    if (!x && y && !z) return y
    if (!x && !y && z) return z

    if (x && y && !z) return x + y
    if (!x && y && z) return y + z
    if (x && !y && z) return z + x

    if(x && y && z) return (x+y) / z

    if(!x && !y && !z) return false
    return null
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log( randomFunction(1) )        //1
console.log( randomFunction(1, 2) )     //3
console.log( randomFunction(10, 2, 3) ) //4
console.log( randomFunction() )         //false
```