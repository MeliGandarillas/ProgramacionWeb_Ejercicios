//leer del local storage
const obtenerTareas = () => {
    let datosGuardados = localStorage.getItem("tareas");
    if (datosGuardados === null) {
        return [];
    }
    return JSON.parse(datosGuardados);
};
//escribir 
const guardarTareas = (tareas) => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
};
//muestra en pantalla
const renderizarTareas = () => {
    let tareas = obtenerTareas();
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    for (let i = 0; i < tareas.length; i++) {
        let item = document.createElement("li");
        item.classList.add("tarea-item");

        let texto = document.createElement("span");
        texto.classList.add("tarea-texto");
        texto.textContent = tareas[i];

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarTarea(i);

        item.appendChild(texto);
        item.appendChild(botonEliminar);
        lista.appendChild(item);
    }
};

const agregarTarea = () => {
    let input = document.getElementById("nuevaTarea");
    let texto = input.value.trim();
    if (texto === "") {
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Escribe una tarea antes de agregarla."
        });
        return;
    }
    let tareas = obtenerTareas();
    tareas.push(texto);
    guardarTareas(tareas);

    input.value = "";
    renderizarTareas();
};

const eliminarTarea = (indice) => {
    Swal.fire({
        icon: "warning",
        title: "¿Eliminar tarea?",
        text: "Esta acción no se puede deshacer.",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            let tareas = obtenerTareas();
            tareas.splice(indice, 1);
            guardarTareas(tareas);
            renderizarTareas();
        }
    });
};
renderizarTareas();