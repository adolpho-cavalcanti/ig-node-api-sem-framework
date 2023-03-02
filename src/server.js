import http from 'node:http'

/**
 * - Criar Usuário
 * - Listar Usuário
 * - Editar Usuário
 * - Remover Usuário
 * 
 * - Precisamos entender como funciona uma requisição HTTP
 *  - Método HTTP (POST, PUT, GET, DELETE, PATCH, etc) 
 *      - POST: Usado para criar um recurso no backend
 *      - PUT: Usado para atualizar um recurso no backend
 *      - GET: Usado para buscar um recurso no backend
 *      - DELETE: Usado para excluir um recurso no backend
 *      - PATCH: Usado para atualizar uma informação específica de um recurso no backend
 *  - URL
 *      - Podemos obter tanto o método quanto a URL atráves do req ou request
 *      - Exemplo 1: const method = request.method e const url = request.url
 *      - Exemplo 2 usando a destructing: const { method, url } = request
 */

/**
 * Stateful: Os dados da aplicação são armazenados localmente em memória
 * Stateless: Os dados da aplicação são armazenados externamente em banco de dados por exemplo
 */

/**
 * Cabeçalhos - Headers: Request e Response => 
 *  são metadados que facilita a comunicação entre backend e frontend
 *  - Exemplo 1: setHeader()
 */

/**
 * HTTP status code
 * Informational responses (100 – 199)
 * Successful responses (200 – 299)
 * Redirection messages (300 – 399)
 * Client error responses (400 – 499)
 * Server error responses (500 – 599)
 */

const userStateful = []

const server = http.createServer((req, res) => {
    const { method, url } = req
    if(method === 'GET' && url === '/users') {
      return res
        .setHeader('Content-Type', 'application/json')
        .end(JSON.stringify(userStateful))
    }

    if(method === 'POST' && url === '/users') {
      userStateful.push({
        id: 1,
        name: 'Lionel Messi',
        emai: 'messi@gmail.com',
        age: 35,
        king: false
      })
      return res.end('Listagem de usuários')
    }

    return res
      .writeHead(404)
      .end('Not found')
})

server.listen(3334)