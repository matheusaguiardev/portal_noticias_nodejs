module.exports = function(app){
    app.get('/criar_noticia',function(req, res){
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar',function(req, res){
        var noticia = req.body;
        var connection = app.config.dbConnection(); // importado pelo consign
        var noticiasModel = app.app.models.noticiasModel; // importado pelo consign

        noticiasModel.salvarNoticia(noticia, connection, function(erro, result){
          res.redirect('/noticias');
        });
    });
}