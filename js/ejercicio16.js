
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : null;

const calcularOperacion = (operacion) => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let n1 = Number(numero1);
    let n2 = Number(numero2);
    if (numero1.trim() === "" || numero2.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Completa todos los campos con números válidos."
        });
        return;
    }
    if(isNaN(n1) || isNaN(n2)){
        Swal.fire({
            icon: "error",
            title: "Datos inválidos",
            text: "Ingresa solo números"
        });
        return;
    }
    let resultado;
    if (operacion === "suma") {
        resultado = sumar(n1, n2);
    } else if (operacion === "resta") {
        resultado = restar(n1, n2);
    } else if (operacion === "multiplicacion") {
        resultado = multiplicar(n1, n2);
    } else if (operacion === "division") {
        resultado = dividir(n1, n2);
        if(resultado===null){
            Swal.fire({ 
                icon:"error", 
                title:"No permitido", 
                text:"No se permite la división por cero"
            })
        }
    }
    document.getElementById("resultado").value = resultado;
};