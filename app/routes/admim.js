module.exports = function(appplication) {
    appplication.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admim/form_add_noticia");
    });
    
    appplication.post('/noticias/salvar', function(req, res){
        var noticia = req.body;

        var connection = appplication.config.dbConnection();
        var noticiasModel = new appplication.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
    });
}