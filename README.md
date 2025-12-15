
Comandos Typescript 

npm install -g typescript = Instalar o typescript globalmente
npm install typescript = Instalar o typescript localmente no projeto
tsc = Compilar o arquivo typescript para javascript
tsc --init = Criar o arquivo de configuração do typescript (tsconfig.json)  


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ! da bipes no codigo dizendo que eu tenho certeza que aquela propriedade nao esta nula ou indefinida
// ? da a opcao de a propriedade ser ou nao definida
// & significa que o objeto author tem que ter todas as propriedades de Author e User
// orders pode ser um array vazio
//readonly é apenas para leitura

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Objeto Typescript

// order type serve para definir o tipo de cada pedido dentro do array orders 
// user type define o formato do objeto user
// const user: User -> define que o objeto user deve seguir o formato do type User
// const preintLog -> define uma função que não retorna nada (void)
// type Author -> define o formato do objeto Author
// const author: Author & User -> define que o objeto author deve seguir o formato dos types
//  interface é uma forma de definir tipos de objetos, semelhante ao type
// const emailUser define um objeto que segue o formato da interface UserInterface
// interface Autohorinterface -> define o formato do objeto Autohorinterface
// const newauthor -> define um objeto que segue o formato das interfaces UserInterface e Autohorinterface
// type Grade -> define um tipo que pode ser número ou string
// const grade -> define uma variável que pode ser número ou string

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Funções Typescript

// interface serve para definir a estrutura de uma função
// const sum e const sub são funções que seguem a estrutura definida pela interface MathFunc
// const sub serve para subtrair dois números e define os tipos de entrada e saída automaticamente com base na interface
// const value serve para armazenar o resultado da soma de 1 e 2 e define o tipo automaticamente como number
// const log serve para imprimir uma mensagem no console e define o tipo de entrada como string e o tipo de saída como void
// void significa que a função não retorna nenhum valor

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Index Typescript

// let age serve para definir a idade de uma pessoa como um número
// const firsName serve para definir o nome de uma pessoa como uma string
// const inValid serve para definir um valor booleano
// let idk serve para definir uma variável que pode receber qualquer tipo de valor
// const ids serve para definir uma lista de números
// const booleans serve para definir uma lista de valores booleanos
// const names serve para definir uma lista de strings
// const person serve para definir uma tupla que contém um número, uma string e um valor booleano
// const people serve para definir uma lista de tuplas, onde cada tupla contém um número e uma string
// Tupla é um array com um número fixo de elementos, onde cada elemento pode ter um tipo diferente
// Array é uma lista de elementos do mesmo tipo
// any é um tipo que pode receber qualquer valor, desativando a verificação de tipos do TypeScript
// const productId serve para definir uma variável que pode receber um valor do tipo string, number ou boolean
// enum é um tipo especial que define um conjunto de valores nomeados
// enum Direction define quatro direções possíveis: Up, Down, Left e Right
// const DirectionUp serve para armazenar o valor da direção Up do enum Direction
// Type Assertion é uma forma de informar ao compilador do TypeScript qual é o tipo de uma variável quando ele não consegue inferir corretamente
// const productName serve para definir uma variável que pode receber qualquer valor, mas que será tratada como uma string
// let idtemId serve para armazenar o valor de productName como uma string, usando Type Assertion
// console.log(Direction) serve para imprimir o valor do enum Direction no console

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Classe TypeScript

// interface define a estrutura que uma classe deve seguir
// implements é usado para garantir que a classe siga a estrutura definida pela interface
// readonly significa que a propriedade não pode ser alterada após a inicialização
// protected significa que a propriedade só pode ser acessada dentro da classe e suas subclasses
// private significa que a propriedade só pode ser acessada dentro da classe
// super é usado para chamar o construtor da classe pai
// extends é usado para criar uma classe filha que herda propriedades e métodos da classe pai
// sayMyName é um método que retorna o nome da pessoa
// whoAmI é um método da classe Employee que retorna o nome da pessoa, demonstrando o uso de protected


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Genericos TypeScript

// retyrnValue serve para retornar um valor do tipo T que é passado como parâmetro genérico
// message é uma string retornada pela função retyrnValue
// count é um número retornado pela função retyrnValue
// getFirstValueFrontArray serve para retornar o primeiro valor de um array de qualquer tipo
// firstValueFromStringArray é o primeiro valor de um array de strings retornado pela função getFirstValueFrontArray
// firstValueFromNumberArray é o primeiro valor de um array de números retornado pela função getFirstValueFrontArray
// returnPromise é uma função assíncrona que retorna uma Promise que resolve para uma string
// GenericNumber é uma classe genérica que pode trabalhar com qualquer tipo T e tem uma propriedade zeroValue e um método sum
// myGenericNumber é uma instância da classe GenericNumber que trabalha com números e define zeroValue como 0 e sum como a soma de dois números
// T é um parâmetro genérico que representa um tipo qualquer
// <> é a sintaxe usada para passar tipos como parâmetros genéricos
// Promise<string> indica que a função retorna uma Promise que resolve para uma string
// async indica que a função é assíncrona e retorna uma Promise
// : T indica o tipo de retorno da função ou método
// (x: T, y: T) => T indica o tipo da função sum que recebe dois parâmetros do tipo T e retorna um valor do tipo T
// constructor é um método especial usado para criar e inicializar objetos da classe


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
TypeScript com  React

npx create-react-app typescript-com-react --template typescript



