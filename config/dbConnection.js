var mysql = require('mysql2');

var connMySQL = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'userteste',
        password : '123456',
        database : 'portal_noticias'
    });
}

module.exports = function(){
    return connMySQL;
}
