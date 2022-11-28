

let peso = prompt("Ingrese su peso en Kg");
let altura = prompt ("Ingrese su altura en metros (Ej: 1.75)");
let indice = peso / (altura **2 );
alert("Tu IMC es " + indice)
if (indice <= 18.4) {
    alert("Estas bajo/a de peso");
}
if (indice >= 18.5 && indice <= 24.9) {
    alert("Estas en el peso adecuado amigo/a")
}
if (indice >= 25.0 ) {
    alert("Estas un poco excedido en tu peso amigo/a")
}