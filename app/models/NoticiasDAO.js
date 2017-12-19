function NoticiasDAO(connection){
    this._conn = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback){
    this._conn.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(idNoticia, callback){
    this._conn.query('select * from noticias where id_noticia = ?',idNoticia , callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._conn.query('insert into noticias set ?',noticia, callback);
}

NoticiasDAO.prototype.getUltimasNoticias = function(qtdNoticias, callback){
    this._conn.query('select * from noticias order by data_criacao desc limit ?', qtdNoticias, callback);
}

module.exports = function(){
    return NoticiasDAO;
}