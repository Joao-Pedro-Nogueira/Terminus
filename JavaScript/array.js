// Array = [valor1, valor2, valor3, valor4, ..., valorN]
// ibiza duratex 45mm 30metros

let names = ['Pedro', 'Sarah', 'Felipe', 'Júlia', 7, 21, true]
console.log(names)

const Pedro = names[0]
console.log(Pedro)

// Push -> Adiciona ao final da lista
names.push('George')

// Unshift -> Adiciona ao início da lista
names.unshift('Ana')
console.log(names)

// Pop -> Remove o último valor
names.pop()
console.log(names)

// array[n] = 'changedValue' -> Trocando o valor
names[3] = 'Gustavo'
console.log(names)

// array.indexOf(item) -> Encontrar o índice do item
indexOfPedro = names.indexOf('Pedro')
console.log(indexOfPedro)

// sort() = Ordem alfabética
sortedNames = names.sort()
console.log(sortedNames)

// Número de elementos (tamanho)
console.log(names.length)

// Verificando se é uma variável (ou constante) é Array
const isNamesArray = Array.isArray(names)
console.log(isNamesArray)
