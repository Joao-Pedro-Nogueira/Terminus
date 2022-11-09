// Map, Filter e Reduce

// Função Map -> Executa uma operação matemática para cada item de um array
const numbers = [1, 2, 3, 4, 5]

const numbersMultipliedByTwo = numbers.map(function (number) {
  return number * 2
})

console.log(numbersMultipliedByTwo)

// Importante: o valor entre parênteses no nome de uma função define o termo para se referir aos elementos (individualmente) do array.

// Filter -> Bem óbvio: cria um filtro para os valores :)

const ages = [3, 14, 19, 25, 36, 42, 51, 62, 73]

const evenAges = ages.filter(function (age) {
  return age % 2 === 0
})
console.log(evenAges)

const adultAges = ages.filter(function (age) {
  return age >= 18
})
console.log(adultAges)

// Reduce -> Reduzir todo o array para um único valor

const sumOfAges = ages.reduce(function (age, accumulator) {
  return accumulator + age
}, 0)
console.log(sumOfAges)
