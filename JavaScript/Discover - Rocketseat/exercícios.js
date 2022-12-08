a = 19

var weight

console.log(typeof weight)

let person = {
  name: 'Joao',
  age: a,
  weight: 85,
  height: 191,
  isSusbcribed: true
}

console.log(person)
console.log(typeof person.stars)

console.log(
  `${person.name} de idade ${person.age} pesa ${person.weight} kg e mede ${person.height} centímetros`
)
console.log(
  person.name +
    ' de idade ' +
    person.age +
    ' pesa ' +
    person.weight +
    ' kg e mede ' +
    person.height +
    ' centímetros'
)

let students = [person]

console.log(students)
console.log(students[0])

const johnDoe = {
  name: 'johnDoe',
  age: 21,
  weight: 14,
  height: 179,
  isSusbcribed: false
}

students[1] = johnDoe

console.log(students)

console.log(a)
var a
