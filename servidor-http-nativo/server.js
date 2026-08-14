import http from 'node:http'

const porta = 3000

const server = http.createServer();

const requisicao = (req,res) => {

    console.log('Recurso criado! ${req.method} ${req.url}');
    console.log(new Date().toISOString());

    res.statusCode = 201
    res.setHeader('Content-Type', 'text/plain', 'charset=utf-8');
    res.end('acho q foih');
}

server.on('request', requisicao);

server.listen(porta, ()=> {
    console.log('Servidor ouvindo na porta ${porta}')
})

//feat - feature adicionada

//core - configuração do projeto

//add - adição de algum código de lógica

//edit - edição de código

//remove - remoção de código