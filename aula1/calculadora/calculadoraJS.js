function resultado(result){
    return document.getElementById("resultado").innerHTML = result;
}

function converter(valor1){
    return parseInt(document.getElementById("number"+valor1).value);
}
function calcSoma(){ 
    var result = converter(1) + converter(2);
    // alert("Valor = " + result);
    resultado(result);
}
function calcSubtrai(){ 
    var result = converter(1) - converter(2);
    // alert("Valor = " + result);
    resultado(result);
}
function calcMultiplica(){ 
    var result = converter(1) * converter(2);
    // alert("Valor = " + result);
    resultado(result);
}
function calcDivide(){ 
    var result = converter(1) / converter(2);
    // alert("Valor = " + result);
    resultado(result);
}