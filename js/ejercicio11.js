function convertir (evento){
    evento.preventDefault();
    var kilometros = document.getElementById("kilometros").value;
    var resultado = parseFloat(kilometros) * 0.621371;
    document.getElementById("resultado").value = resultado.toFixed(5);
}