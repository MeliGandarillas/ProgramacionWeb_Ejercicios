function verificar (evento){
    evento.preventDefault();
    var edad = document.getElementById("edad").value;
    if (edad >= 18){
        document.getElementById("resultado").value = "Puedes votar";
    } else {
        document.getElementById("resultado").value = "No puedes votar";
    }
}