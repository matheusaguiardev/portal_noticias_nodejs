module.exports.index = function(app, req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    var quantidadeDeNoticias = 5;

    noticiasModel.getUltimasNoticias(quantidadeDeNoticias, function(error, result){
        console.log(result);
        res.render('home/index', {noticias: result});
    });
}