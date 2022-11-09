const person = {
  firstName: 'Pedro',
  lastName: 'Nogueira',
  age: 19,
  hobbies: ['Estudar teologia e filosofia', 'Tocar bateria', 'Treinar'],
  occupation: 'Empresário e programador'
}

// const firstName = person.firstName
// const lastName = person.lastName
// const age = person.age
// const hobbies = person.hobbies
// const occupation = person.occupation

// -> Refazer de forma mais eficiente
// Destructuring
const { firstName, lastName, age, hobbies, occupation } = person

// Renomeando:
const {
  firstName: primeiroNome,
  lastName: ultimoNome,
  age: idade,
  hobbies: tempoLivre,
  occupation: profissão
} = person

console.log(person, firstName, lastName, age, hobbies, occupation)

console.log(primeiroNome, ultimoNome, idade, tempoLivre, profissão)

// Adicionando novas propriedades ao objeto
person.height = 189
console.log(person)

// Array de Objetos
const taskList = [
  {
    id: 1,
    description: 'treinar',
    isComplete: false
  },
  {
    id: 2,
    description: 'Ler Inteligência Humilhada',
    isComplete: true
  },
  {
    id: 3,
    description: 'Ensaiar músicas',
    isComplete: false
  }
]

// Acessando a descrição da segunda tarefa
let descriptionOfSecondTask = taskList[1].description
console.log(descriptionOfSecondTask)
