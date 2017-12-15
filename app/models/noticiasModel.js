
module.exports = function(){

    this.getNoticias = function (conn, callback){
        conn.query('select * from noticias', callback);
    }

    this.getNoticia = function(conn, callback){
        conn.query('select * from noticias where id_noticia = 1', callback);
    }

    this.salvarNoticia = function(noticia, conn, callback){
        conn.query('insert into noticias set ?',noticia, callback);
    }

    return this;
}