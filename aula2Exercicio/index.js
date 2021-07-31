var http = require('http')
var server = http.createServer(function(request, response) {
    if (request.url == "/") {
        response.render("/view/home");
    }else if (request.url == "/pagina2") {
        response.write("/view/pagina2");
    }else if (request.url == "/formulario") {
        response.write("/view/formulario");
    } else {
        response.writeHead(404, {'Content-Type': 'text/html; chatset=utf-8'})
        response.write("<h1>Pagina nao encontrada</h1>")
    }
    response.end();
});
server.listen(3000, function() {
    console.log("Executnado http://localhost:3000")
});
