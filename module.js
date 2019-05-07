var fs=require("fs");
function docfile(ten,res) {
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    fs.ReadStream(ten).pipe(res);
}
var load_router=function (req,res) {
    var path=res.url;
    switch (path) {
        case "/ad":
            docfile("display2.html",res);            
            break;
    
        default:
            docfile("display1.html",res);
            break;
    }
}
module.exports.load_router=load_router;