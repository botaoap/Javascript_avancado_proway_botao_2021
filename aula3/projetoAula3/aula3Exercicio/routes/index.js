var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Exercicio aula 3' });
});

router.get('/formulario', function(req, res, next) {
  res.render('formulario', { title: 'Formulario' });
});

router.get('/calculadora', function(req, res, next) {
  res.render('calculadora', { title: 'Calculadora' });
});

router.get('/paginaRandom', function(req, res, next) {
  res.render('paginaRandom', { title: 'Pagina Random' });
});

module.exports = router;
