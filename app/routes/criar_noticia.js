module.exports = function(app){
    app.get('/criar_noticia',function(req, res){
       app.app.controllers.admin.criar_noticia(app, req, res);
    });

    app.post('/noticias/salvar',function(req, res){
       app.app.controllers.admin.noticias_salvar(app, req, res);
    });
}