
module.exports = function(app){
    app.get('/noticias',function(req, res){
        var connection = app.config.dbConnection(); // importado pelo consign
        var noticiasModel = new app.app.models.NoticiasDAO(connection); // importado pelo consign

        noticiasModel.getNoticias(function(error, result){
            res.render('noticias/noticias', {noticias: result});
        });
    });
}
