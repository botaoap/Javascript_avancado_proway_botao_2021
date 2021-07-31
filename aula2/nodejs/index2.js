const { request } = require('express');
var http = require('http');
const { report } = require('process');
var server = http.createServer(function(request, response) {
    if (request.url == "/") {
        response.write("<h1> Trocando Home com HTTP </h1>");
    }else if (request.url == "/pagina2") {
        response.write("<h1> Trocando Pagina2  com HTTP </h1>");
    }
    else {
        response.writeHead(404, {'Content-Type': 'text/html; chatset=utf-8'})
        response.write("<h1>Pagina nao encontrada</h1>")
    }
    response.end();
});
server.listen(3000, function() {
    console.log("Executnado http://localhost:3000")
});


// TODO: Criando outro servidor
var express = require('express')