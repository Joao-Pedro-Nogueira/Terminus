// Muito utilizado para transfirir dados. Basicamente transforma tudo em string

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

const taskListJSON = JSON.stringify(taskList)
console.log('Em JSON')
console.log(taskListJSON) // Deixa de ser um array

console.log(taskListJSON[7]) // printa o 7° caracter

const taskListReceived = JSON.parse(taskListJSON)
console.log('Parse')
console.log(taskListReceived)
