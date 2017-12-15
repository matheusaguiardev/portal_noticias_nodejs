var app = require('./config/server');
var ip = require("ip");

var port = 3000;

app.listen(port, function(req,res){
    console.log(' Servidor iniciado na ip e porta ' + ip.address() +':'+port);
});
