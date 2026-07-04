function conversor (evento){
    evento.preventDefault();
    var pesos = document.getElementById("pesos").value;
    var resultado = parseFloat(pesos) * 0.057;
    document.getElementById("resultado").value = resultado.toFixed(4);
}