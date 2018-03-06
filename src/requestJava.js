let http = require("http");

module.exports = httpJava;

function httpJava(myurl){
    return new  Promise(function(resolve,reject){
        let url="";
        if(myurl==null||myurl==undefined||myurl==""){
            reject(0);
            return null;
        }else {
            url=myurl;
        }
        http.get(url, function (res) {
            const { statusCode } = res;
            let error;
            if (statusCode !== 200) {
                reject(1);
                error = new Error('请求失败。\n' +
                    `状态码: ${statusCode}`);
            }
            if (error) {
                console.error(error.message);
                // 消耗响应数据以释放内存
                res.resume();
                return;
            }
            let content = '';
            res.on('data', function (data) {
                content+=data;
            }).on('end', function () {
                //console.log(content);
                resolve(content);
            });
        });
    })
}

