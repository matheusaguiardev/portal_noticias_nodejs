
module.exports = function(app){
    app.get('/noticias',function(req, res){
        var connection = app.config.dbConnection(); // importado pelo consign
        var noticiasModel = app.app.models.noticiasModel; // importado pelo consign

        noticiasModel.getNoticias(connection, function(error, result){
            res.render('noticias/noticias', {noticias: result});
        });
    });
}
