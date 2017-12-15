var app = require('./config/server');

app.listen(3000, function(req,res){
    console.log('Servidor iniciado na porta 3000');
});
