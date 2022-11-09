// Variáveis (const e let) -------------------------------
const message = 'constante!'
console.log(message)

let word = 'variável'
console.log(word)

word = 'alterado'
console.log(word)

// String -----------------------------------------------
console.log(message.length)

const firstName = 'Pedro'
const lastName = 'Nogueira'
const nomeCompleto = firstName + ' ' + lastName

console.log(nomeCompleto)

// Variável no console.log
console.log('Meu nome é ' + firstName + ' ' + lastName)
console.log(`Meu nome é ${firstName} ${lastName}`)
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`)

// Comando split
const names = 'João, Sarah, Felipe'

console.log(names.split(','))
console.log(names.length)

const separatedNames = names.split(',')

console.log(separatedNames)
console.log(separatedNames.length)

// Documentação
console.log('LEIA A DOCUMENTAÇÃO NO MDN')

// Number -----------------------------------------------
const number = 5

console.log(number)
console.log(number + 5)

// Verificando o tipo de variável
console.log(typeof number)
console.log(typeof names)

// Mudando o tipo de variável
const stringNumber = number.toString()
console.log(typeof stringNumber)

// Boolean -----------------------------------------------

console.log(2 == 3)
console.log(2 == 2)

// Null e Undefined

const x = null // vazia
console.log(x)

const y = undefined // não é nada
console.log(y)
