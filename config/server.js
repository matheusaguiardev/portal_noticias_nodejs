var express = require('express'); // retorna uma função
var app = express(); // executa a função do express
var bodyParser = require('body-parser');
var consign = require('consign'); // 

app.set('view engine', 'ejs'); // modificar a engine de view do express
app.set('views', './app/views'); // mudar o caminho da pasta de views

app.use(bodyParser.urlencoded({extended: true})); // adicionar o body parser no express (middleware)

consign()
    .include('./app/routes')
    .then('app/models')
    .then('config/dbConnection.js') // fazer o require da conexao com o banco de dados depois de importar as rotas / Ele já executa o módulo
    .into(app); // scanneia o diretório e faz os imports dos módulos dentro do app 

module.exports = app;