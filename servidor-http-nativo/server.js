import http from 'node:http'
import { URL } from 'node:url'

const porta = 3000

const server = http.createServer()

const requisicao = (req, res) => {
    console.log(`Requisição registrada! ${req.method} ${req.url}`);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200
    const urlObj = new URL(req.url, `http://${req.headers.host}`);


    if (req.method === 'GET' && urlObj.pathname === '/contato') {
        const contato = urlObj.searchParams.get('contato');
        return res.end(JSON.stringify({"data": [{"telefone": "4002-8922", "Email": "pirilampo@gmail.com"}]}));

    } else if(req.method === 'GET' && urlObj.pathname === '/produtos') {
        const product = urlObj.searchParams.get('produto');
        return res.end(JSON.stringify({"produto": "Detergente (produto mutável)"}));
    } 
    else if(req.method === 'GET' && urlObj.pathname === '/inexistente'){
        res.statusCode = 404
        return res.end("deu erro florzinha - 404")
    }
    return res.end(JSON.stringify({ "data": "página inicial" }));
    res.end();
}

server.on('request', requisicao);

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
});