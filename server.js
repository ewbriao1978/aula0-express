// comandos
// npm init
// npm install express
// node --watch server.js


// para receber dados em JSON no body
// app.use(express.json());
const express = require('express');
const app = express();
// para usar json no body
app.use(express.json());

const PORT = 3000;

app.get('/nothing', (req, res) => {
    const dados = {
        frase: 'ERROR!!! Rota não encontrada!'
        };
    res.status(404).json(dados);
})

app.post('/receba', (req, res) => {
    console.log(req.body);
    console.log(req.body.nome);

    const dados = {
        frase: 'Rota POST RECEBA recebida com sucesso!'
        };
    res.status(200).json(dados);
})


app.post('/calcule', (req, res) => {
    // body: 
    // { 
   // salario: 10000.00
//     } 
    salario = Number(req.body.salario);
    console.log(salario);
    imposto = salario * 0.27;
    console.log(imposto);
    salarioLiquido = salario - imposto;

     const dados = {
         "imposto": imposto.toString(),
         "salarioLiquido": salarioLiquido.toString(),
         "mensagem": "Cálculo realizado com sucesso!"
         };
    res.status(200).json(dados);
})
    


app.get('/', (req, res) => {
    const dados = {
        frase: 'Minha primeira rota com Express!'
        };
    res.status(200).json(dados);
})


app.get('/bem_vindo', (req, res) => {
    const msg = {
        mensagem: 'Bem-vindo ao mundo do node!',
    
        };
    res.status(200).json(msg);
})



app.get('/produtos', (req, res) => {
    const produtos = [
        { id: 1, nome: 'Iphone', preco: 8000.00 },
        { id: 2, nome: 'Nintendo Switch 2 :(', preco: 4500.00 },
        { id: 3, nome: 'Cassio Watch', preco: 500.00 }
    ];
    res.status(200).json(produtos);
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

  