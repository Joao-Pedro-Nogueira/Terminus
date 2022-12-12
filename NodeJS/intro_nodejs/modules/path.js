const path = require('path')

// Nome do arquivo atual
console.log(path.basename(__filename))

// Nome do diretório atual
console.log(path.dirname(__filename))

// Extensão do arquivo
console.log(path.extname(__filename))

// Criar um objeto path
console.log(path.parse(__filename))

// Juntar caminhos de arquivo
console.log(path.join(__dirname, 'test', 'test.html')) // Adiciona uma pasta 'test' com um arquivo test.html dentro
