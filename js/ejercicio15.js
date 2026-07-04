let estudiantes = [];

function agregarEstudiante() {
    let nomInput = document.getElementById("nombre");
    let nom = nomInput.value.trim();
    let cal = parseFloat(document.getElementById("calificacion").value.trim());

    if (nom === "" ||  cal === "") {
        alert("Por favor ingresa el nombre y la calificación del estudiante.");
        return;
    }
    if (!nomInput.checkValidity()) {
        alert("Por favor ingresa un nombre válido (solo letras).");
        return;
    }

    let nota = parseFloat(cal);
    if (isNaN(nota) || nota < 0 || nota > 100) {
        alert("Por favor ingresa una calificación entre 0 y 100.");
        return;
    }
    let estudiante = {
        nombre: nom,
        calificacion: nota
    };
    estudiantes.push(estudiante);

    //limpiar
    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
    alert("Estudiante agregado.");
}

function calcular() {
    if (estudiantes.length === 0) {
        alert("No hay estudiantes agregados. Por favor, agrega al menos un estudiante.");
        return;
    }
    let readySuma = estudiantes.reduce((suma, estudiante) => suma + estudiante.calificacion, 0);
    let promedio = readySuma / estudiantes.length;
    let calMasAlta = Math.max(...estudiantes.map(estudiante => estudiante.calificacion));
    let calMasBaja = Math.min(...estudiantes.map(estudiante => estudiante.calificacion));

    let alumnosAltos = [];
    let alumnosBajos = [];
    estudiantes.forEach(function(estudiante) {
        if (estudiante.calificacion === calMasAlta) {
            alumnosAltos.push(estudiante.nombre);
        }
        if (estudiante.calificacion === calMasBaja) {
            alumnosBajos.push(estudiante.nombre);
        }
    });

    document.getElementById("promedio").value = promedio.toFixed(2);

    document.getElementById("nombreMasAlta").value = alumnosAltos.sort().join(", ");
    document.getElementById("calMasAlta").value = calMasAlta;

    document.getElementById("nombreMasBaja").value = alumnosBajos.sort().join(", ");
    document.getElementById("calMasBaja").value = calMasBaja;
}