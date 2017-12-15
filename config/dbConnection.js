
var mysql = require('mysql'); // drive de conexão 

var connMySQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    return connMySQL;
}
