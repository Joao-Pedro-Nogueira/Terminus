// Loops

// FOR LOOP

// for (valor inicial; valor final; progressão?) {
//  COMANDO
//}
for (let index = 7; index <= 21; index++) {
  console.log(index)
}

const cars = [
  'Ford Mustang Mach1',
  'Land Rover Defender',
  'BMW I8 Hybrid',
  'Bugatti Chiron'
]

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i])
  console.log(i)
}

console.log(cars.length)

// Existem outros métodos menos confusos.

for (let car of cars) {
  console.log(car)
}

cars.forEach(function (car) {
  console.log(car)
})

const ufcbr = ['Anderson Silva', 'Vitor Belfort', 'Charles do Bronx']

for (let br of ufcbr) {
  console.log(br)
}

ufcbr.forEach(function (brs) {
  console.log(brs)
})
