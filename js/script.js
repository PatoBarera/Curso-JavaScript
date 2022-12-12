function suma(numeroUno, numeroDos) {
    let resultado = numeroUno + numeroDos;
    return resultado;
}
function resta(numeroUno, numeroDos) {
    let resultado = numeroUno - numeroDos;
    return resultado;
}
function multiplicacion(numeroUno, numeroDos) {
    let resultado = numeroUno * numeroDos;
    return resultado;
}
function division(numeroUno, numeroDos) {
    let resultado = numeroUno / numeroDos;
    return resultado;
}
function mostrarResultado(resultado) {
    alert("El resultado es: " + resultado)
}
function mostrarMenu() {
    let opcion = prompt("Bievenido, seleccione una opción. Si no, escribí (cerrar) para salir \n1 Sumar \n2 Restar \n3 Multiplicar \n4 Dividir");
    return opcion
}
    
function calculadora() {
    let opcionSeleccionada = mostrarMenu()
    while (opcionSeleccionada.toUpperCase() !== "CERRAR") {
        if (opcionSeleccionada !== "") {
            let numeroUno = parseFloat(prompt("Ingrese el primer número "))
            let numeroDos = parseFloat(prompt("Ingrese el segundo número "))
            opcionSeleccionada = parseInt(opcionSeleccionada)
            switch (opcionSeleccionada) {
                case 1:
                    let resultadoSuma = suma(numeroUno, numeroDos);
                    mostrarResultado(resultadoSuma);
                    break;
                case 2:
                    let resultadoResta = resta(numeroUno, numeroDos);
                    mostrarResultado(resultadoResta)
                    break;
                case 3:
                    let resultado = multiplicacion(numeroUno, numeroDos)    
                    mostrarResultado(resultado);
                    break;
                case 4:
                        let resultadoDivision = division(numeroUno, numeroDos)
                        mostrarResultado (resultadoDivision);
                    break;
  
                    default:
                        alert("Opción incorrecta")
                        break;
            }
            // SWITCH PARA SELECCIONAR OPCION
        } else {
            alert("seleccione la opción")
        }
        opcionSeleccionada = mostrarMenu()
    }
}
calculadora()