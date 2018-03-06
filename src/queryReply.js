var mysql  = require('mysql');  //调用MySQL模块

module.exports = queryKeyword

async  function queryKeyword(sql){
    return new Promise((resolve) => {
        //创建一个connection
        var connection = mysql.createConnection({
            host     : 'localhost',       //主机
            user     : 'root',               //MySQL认证用户名
            password : 'tms@123',        //MySQL认证用户密码
            port: '3306',                   //端口号
            database:"weixinrobot" // 数据库名
        });
        //创建一个connection
        connection.connect(function(err){
            if(err){
                console.log('[query] - :'+err);
                return;
            }
            console.log('[connection connect]  succeed!');
        });
        //执行SQL语句
        //console.log(sqlStr)
        connection.query(sql, function(err, rows, fields) {
            if (err) {
                console.log('[query] - :'+err);
                return;
            }
            //console.log('The solution is: ', rows);
            resolve(rows)
        });
        //关闭connection
        connection.end(function(err){
            if(err){
                return;
            }
            console.log('[connection end] succeed!');
        });
    });

}


