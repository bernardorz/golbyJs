/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let numbers = [1, 10, 25, 64, 104]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const returnArray = (array) => array

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( returnArray(numbers)[1] )

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
const consultarIndice = (array, index) => array[index]

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const numbersTwo = [6, 80, 35, 64, 85]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for (let i = 0; i < numbersTwo.length; i++) console.log(consultarIndice(numbersTwo, i))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (name) {
    const books = {
        HarryPotter: {
            quantidadePaginas: 345,
            autor: 'J. K. Rowling',
            editora: 'Rocco'
        },
        PequenoPrincipe: {
            quantidadedePaginas: 96,
            autor: 'Antoine de Saint-Exupéry',
            editora: 'Agir'
        },
        PercyJackson: {
            quantidadedePaginas : 543,
            autor: 'Rick Riordan',
            editora: 'Intrínseca'
        }
    }

    return name ? books[name] : books
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() )

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
const bookName = "HarryPotter"
const harryBook = book(bookName)
console.log( `O livro ${bookName} tem ${harryBook.quantidadePaginas} páginas` )
// Output: O livro HarryPotter tem 345 páginas

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O(A) autor(a) do livro ${bookName} é ${harryBook.autor}`)
// Output: O(A) autor(a) do livro HarryPotter é J. K. Rowling

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${bookName} foi publicado pela editora ${harryBook.editora}.`)
//O livro HarryPotter foi publicado pela editora Rocco!