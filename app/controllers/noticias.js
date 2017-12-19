module.exports.noticias = function(app,req, res){
    var connection = app.config.dbConnection(); // importado pelo consign
    var noticiasModel = new app.app.models.NoticiasDAO(connection); // importado pelo consign

    noticiasModel.getNoticias(function(error, result){
        res.render('noticias/noticias', {noticias: result});
    });
}


module.exports.noticia = function(app,req, res){
    var connection = app.config.dbConnection(); 
    var noticiasModel = app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia(connection, function(erro, result){
        res.render('noticias/noticia', {noticia: result[0]});
    });
}
