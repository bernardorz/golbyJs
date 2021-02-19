# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
let objeto = {}

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
let pessoa = {
    nome: 'Wagner',
    sobrenome: 'Rodrigues',
    sexo: 'masculino',
    idade: 17,
    altura: 1.75,
    peso: 65,
    andando: false,
    caminhouQuantosMetros: 0
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = () => pessoa.idade++

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = (metros) => {
    pessoa.caminhouQuantosMetros += metros
    pessoa.andando = true
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = () => pessoa.andando = false

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = () => `Olá! Meu nome é ${pessoa.nome} ${pessoa.sobrenome}!`

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = () => `Olá, eu tenho ${pessoa.idade} anos`

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = () => `Eu peso ${pessoa.peso}Kg.`

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = () => `Minha altura é ${pessoa.altura}m`

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log( pessoa.nomeCompleto() ) // Olá! Meu nome é Wagner Rodrigues!

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log( pessoa.mostrarIdade() ) // Olá, eu tenho 17 anos

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log( pessoa.mostrarPeso() ) //Eu peso 65Kg.

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log( pessoa.mostrarAltura() ) //Minha altura é 1.75m

/*
Faça a `pessoa` fazer 3 aniversários.
*/
for (let i = 0; i < 3; i++) pessoa.fazerAniversario()

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log( pessoa.mostrarIdade() ) //Olá, eu tenho 20 anos

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(50)
pessoa.andar(80)
pessoa.andar(120)

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log( pessoa.andando ) //true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar()

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log( pessoa.andando ) //false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log( pessoa.caminhouQuantosMetros ) //250

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
pessoa.apresentacao = () => {
    const { sexo, nome, sobrenome, idade, altura, peso, caminhouQuantosMetros } = pessoa
    const nomeCompleto = nome + " " + sobrenome
    const sexoOpcao = sexo === 'masculino' ? 'o' : 'a'
    const idadePlural = idade > 1 ? 'anos' : 'ano'
    const metrosPlural = caminhouQuantosMetros > 1 ? 'metros' : 'metro'

    return `Olá, eu sou ${sexoOpcao} ${nomeCompleto}, tenho ${idade} ${idadePlural}, ${altura}, meu peso é ${peso}Kg e, só hoje, eu já caminhei ${caminhouQuantosMetros} ${metrosPlural}`
}

// Agora, apresente-se ;)

console.log( pessoa.apresentacao() )
// Olá, eu sou o Wagner Rodrigues, tenho 20 anos, 1.75, meu peso é 65Kg e, só hoje, eu já caminhei 250 metros
```
