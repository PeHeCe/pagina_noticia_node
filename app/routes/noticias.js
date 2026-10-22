module.exports = function(appplication){

    appplication.get('/noticias', function(req, res){

        var connection = appplication.config.dbConnection();
        var noticiasModel = new appplication.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });
    });
        
};    