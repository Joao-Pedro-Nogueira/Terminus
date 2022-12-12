const http = require('http')

const port = 1414

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>Home Page</h1>')
  }

  if (req.url === '/users') {
    const users = [
      {
        name: 'John Doe',
        email: 'john.doe@gmail.com'
      },
      {
        name: 'Jany Doe',
        email: 'jany.doe@gmail.com'
      }
    ]
    res.writeHead()
  }
})

server.listen(port, () => console.log(`Listening on ${port}`))
// Importar o http
// Definir uma porta
// Criar o servidor com a função 'createServer'
// Definir os parâmetros 'req' e 'res' (request & response)
