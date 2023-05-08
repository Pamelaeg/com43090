//Ejercicio para primer preentrega 
//Calculadora de porcentaje
//Debe constar de las siguientes opciones:
//1 - Saludo inicial
//2 - Breve descripción
//3 - Complete el porcentaje que quiere calcular:
//4 - Complete el valor sobre el que desea calcular el porcentaje
//5 - El __% de __ es __
//6 - Seleccione //esto era la idea pero no me salio =(
//    a) calcular nuevo porcentaje 
//    b) Salir 
// 7 - Saludo de despedida

function calcularPorcent(porcentaje,valor,total) {
    return porcentaje*valor/100
}

let saludo = alert("Hola! Soy una demo de una calculadora interactiva");

let calculo=prompt("Escriba % si desea calcular un porcentaje")

switch (calculo) {
    case "%":
        let porcentaje=parseInt(prompt("Complete el porcentaje que desea calcular"))
        let valor = parseInt(prompt("Complete el número sobre el que sea calcular el " + porcentaje + "%."))
        let resultado=calcularPorcent (porcentaje,valor)
        alert("El " + porcentaje + " % de " + valor + " es " + resultado)
        break;

    default: alert("La opción no es válida. Presione F5 para volver a comenzar")
        break;
}

alert("Gracias! Visitanos en unas semanas para ver los avances")
