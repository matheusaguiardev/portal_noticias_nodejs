module.exports = function(app){
    app.get('/criar_noticia',function(req, res){
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar',function(req, res){
        var noticia = req.body;
        
        req.assert('titulo','Título é obrigatório').notEmpty();
        req.assert('resumo','Resumo é obrigatório').notEmpty();
        req.assert('resumo','Resumo deve conter entre 10 a 100 caracteres').len(10, 100);
        req.assert('autor','Autor é obrigatório').notEmpty();
        req.assert('data_noticia','Data é obrigatório').notEmpty();
        req.assert('noticia','Notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            res.render('admin/form_add_noticia');
            return;
        }

        var connection = app.config.dbConnection(); // importado pelo consign
        var noticiasModel = new app.app.models.NoticiasDAO(connection); // importado pelo consign
        noticiasModel.salvarNoticia(noticia, function(erro, result){
          res.redirect('/noticias');
        });
    });
}