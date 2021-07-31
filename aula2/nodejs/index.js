const msg = "Olá pessoas";
// TODO: pegando os modulos do express
var express = require('express');
// TODO: trazendo os modulos do express para a var app
var app = express();

// TODO: usando um modulo do express chamando Set(olhar documentation) 
app.set('view engine', 'ejs');

// TODO: criando um Servidor na porta 3000 para rodar a aplicacao
app.listen(3000, function() {
    // TODO: fazendo um console apenas para identificar que o servidor esta subindo
    console.log('Executando em http://localhost:3000')
});

// TODO: criando primeira pagina
app.get('/', function(request, response) {
    // TODO: resposta para o servidor
    response.render("../views/home.ejs")
});

// TODO: Criando uma segunda pagina
app.get('/pagina2', function(request, response) {
    
    response.render("../views/pagina2.ejs")
});
