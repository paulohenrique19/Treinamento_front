let message = "Message test for string manipulations"

// Exibindo o texto em maíusculo
console.log(message.toUpperCase())

// Exibindo o texto em maíusculo
console.log(message.toLowerCase())

// Obtendo o comprimento de uma string
console.log(message.length)

// Quantos dígitos tem um número
let value = 12345
console.log(String(value).length)
console.log(value.toString().length)

// substituir parte de um texto
console.log(message.replace("for", "to"))

// extraindo uma parte da string (start, end)
console.log(message.slice(0, 7))

// extraindo uma parte da string de trás para frente.
console.log(message.slice(-11, 2))

// removendo espaços em branco no início e final da string
let textComSpace = "   aaaaaa   "
console.log(textComSpace.trim())

// completando uma string

const creditCard = "1234567812344928"

// pega os ultimos 4 digitos
const lastDigits = creditCard.slice(-4)


/* O padStart preenche a string do inicio*/
const maskedNumber = lastDigits.padStart
(creditCard.length, "X")

console.log(maskedNumber)

/* O padEnd preenche a string no final*/
const number = "123"
console.log(number.padEnd(10, "#"))