function calcularMayor (evento){
    evento.preventDefault();
    var numeros = document.getElementById("numeros").value.split(",").map(Number);
    var mayor = Math.max(...numeros);
    document.getElementById("resultadoMayor").value = mayor;
}

function calcularMenor (evento){
    evento.preventDefault();
    var numeros = document.getElementById("numeros").value.split(",").map(Number);
    var menor = Math.min(...numeros);
    document.getElementById("resultadoMenor").value = menor;
}

function calcularPromedio (evento){
    evento.preventDefault();
    var numeros = document.getElementById("numeros").value.split(",").map(Number);
    var promedio = numeros.reduce((a, b) => a + b, 0) / numeros.length;
    document.getElementById("resultadoPromedio").value = promedio;
}