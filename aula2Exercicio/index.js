// var http = require('http')

// // app.get("view engine", "ejs")
// // TODO: a extensao HTTP pode nao ter um leitor de .ejs
// // TODO: logo nao sera possivel ler os arquivos
// var server = http.createServer(function(request, response) {
//     if (request.url == "/") {
//         response.render("/view/home");
//     }else if (request.url == "/pagina2") {
//         response.render("/view/pagina2");
//     }else if (request.url == "/formulario") {
//         response.render("/view/formulario");
//     } else {
//         response.writeHead(404, {'Content-Type': 'text/html; chatset=utf-8'})
//         response.write("<h1>Pagina nao encontrada</h1>")
//     }
//     response.end();
// });
// server.listen(3000, function() {
//     console.log("Executnado http://localhost:3000")
// });


const { request } = require("express");
var express = require("express");
var path = require("path");
var app = express();

// TODO: inicia a nevagacao entre as pages
app.set("view engine", "ejs")

// TODO: inserir BootStrap -> sendFile(path.join...
var formulario = app.get('/formulario', function(request, response){
    response.render("../view/formulario");
});
var pagina2 = app.get("/pagina2", function(request, response){
    response.render("../view/pagina2");
});
var home = app.get("/home", function(request, response){
    response.render("../view/home");
});
app.get('/', function(request, response) {
    if (request.url == '/'){
        response.render("../view/home");
    }else if (request.url == '/pagina2'){
        pagina2
    }else if (request.url == '/formulario'){
        formulario
    }else {
        response.write("Error ao carregar a pagina")
    }
});
app.listen(3000, function() {
    console.log("Conectado em http://localhost:3000");
});