function convertir(evento) {
    evento.preventDefault();
    var celsius = document.getElementById("celsius").value;
    var resultadoFahrenheit = (parseFloat(celsius) * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = resultadoFahrenheit.toFixed(1) + "°F";
}