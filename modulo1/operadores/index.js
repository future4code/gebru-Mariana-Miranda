//RESOLUÇÃO DE EXERCÍCIOS

//1. 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
// RESPOSTA
//SERÁ FALSE POIS ELE SOMENTE ASSUMIRÁ TRUE SE TODOS FOREM TRUE.

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
//RESPOSTA 
//SERÁ FALSE POIS ELE SOMENTE ASSUMIRÁ TRUE SE TODOS FOREM TRUE, BOOL 2 É FALSE.
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
//RESPOSTA
// (bool1 || bool2 ) será true pois existe o bool1 = true
// !resultado ( inverte) passa a ser true. então temos true com true. 
console.log("d. ", typeof resultado)
//operadores somente utilizados com booleanos.

//2.
//RESPOSTA
// prompt somente entrega em string, vai ser necessário mudar para number e solicitar a soma.
//caso não seja feito ele vai concatenar os números ao invés de somar.

//3.
//RESPOSTA
//const soma = (Number)primeiroNumero + (Number)segundoNumero

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1.
//A)
let idade = Number (prompt ("Qual a dua idade"))
//B
let idadeMelhorAmigo = Number (prompt( "Qual a idade do seu melhor amigo?"))
//C
console.log (idade>idadeMelhorAmigo)
//D
console.log(idadeMelhorAmigo-idade)

//2.
let numero = Number (prompt ("Insira un numero par"))
console.log (numero / 2)
// no caso de impresso um número impar é entregue um número quebrado
//3.
console.log (idade*12)
console.log (idade*365)
console.log (idade*8760)

//4.
let num1 = prompt ("Digite um número")
let num2 = prompt ("Digite outro número")
const numeroMaior = num1 > num2
console.log("O primeiro número é maior que o segundo?" +numeroMaior)
const numeroIgual = num1 === num2
console.log("O primeiro número é igual ao segundo?" +numeroIgual)
const numerodivisivel = num1 / num2
console.log("O primeiro numero é divizivel pelo segundo" +numerodivisivel)
const segundodivisivel = num2 / num1
console.log("O segundo número é divisível pelo primeiro?" +segundodivisivel)

//DESAFIO

let kelvin = 77 - 32*(5/9) + 273.15
let fahrenheit = 80 * (9/5) + 32
let celsious = 30 + 273.15

console.log("O valor de 77 graus F é de" ,kelvin)
console.log("O valor de 80 graus C é de" ,fahrenheit)
console.log("o valor de 30 graus celsious é de",fahrenheit)
console.log("O valor de 30 graus C é de", kelvin)


























