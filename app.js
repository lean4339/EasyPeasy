const http = require("http");

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type": "text/plain; charset-utf-8"})
    switch(req.url){
        case "/":
            res.end("Bienvenidos a nuestro sitio bebitos")
            break;
        case "/productos":
            res.end("Estos son nuestros productos bebito")
            break;
        case "/contactos":
            res.end("Dejanos tu mensaje bebito")
            break;
        default:
            res.end("No hay nada para mostrar bebito")
            break;
    }
    

}).listen(3000,"localhost"),()=> console.log("el servidor funciona en el puerto 3000") // local host es el nombre del dominio