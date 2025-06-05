// comandos
// npm init
// npm install express
// node --watch server.js


const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    const dados = {
        frase: 'Minha primeira rota com Express!'
        };
    res.json(dados);
})

app.get('/produtos', (req, res) => {
    const produtos = [
        { id: 1, nome: 'Iphone', preco: 8000.00 },
        { id: 2, nome: 'Nintendo Switch 2 :(', preco: 4500.00 },
        { id: 3, nome: 'Cassio Watch', preco: 500.00 }
    ];
    res.json(produtos);
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

  