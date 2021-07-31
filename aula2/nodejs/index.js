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
    let texto = '<h1> Titulo da pagina </h1> <p>'+ msg +'</p>' 
    texto += '<p><a id="botao" href="/index"> Próxima Pagina </a></p>'
    // TODO: resposta para o servidor
    response.send(texto)
});

// TODO: Criando uma segunda pagina
app.get('/index', function(request, response) {
    let texto = '<h1> Pagina Index </h1> <p> Criando outra pagina </p>' 
    texto += '<p><a href="/"> Voltar </a></p>'
    response.send(texto)
});
