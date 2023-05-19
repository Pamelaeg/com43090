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

let respuesta = "rojo"
let prueba = false

for (let i = 0; i <= 2; i++) {
    let verificacion = prompt(
        "Hola! Soy una demo de una calculadora interactiva, vamos a corroborar que eres humano: El color del tomate es..."
        )
    if (verificacion === respuesta) {
        alert(
            "Corroboramos que eres humano. COMENZEMOS!"
            );
        prueba = true;

        break;
    } else {
        alert("Lo siento, ese no es el color de los tomates. Vuelve a intentarlo")
    }
}

function calcularPorcent(porcentaje, valor, total) {
    return porcentaje * valor / 100
}

function accionSumar(number1, number2) {
    return number1 + number2
}

if (prueba) {
    let calculo = prompt("Escriba % si desea calcular un porcentaje o un signo + si desea sumar dos números");
    while (calculo != 0) {
        switch (calculo) {
            case "%":
                let porcentaje = parseInt(prompt("Complete el porcentaje que desea calcular"))
                let valor = parseInt(prompt("Complete el número sobre el que sea calcular el " + porcentaje + "%."))
                let resultado = calcularPorcent(porcentaje, valor)
                alert("El " + porcentaje + " % de " + valor + " es " + resultado)
                break;
            case "+":
                let number1 = parseInt(prompt("Ingrese el primer numero que desea sumar"))
                let number2 = parseInt(prompt("Ahora ingrese el numero que quiere sumarle a " + number1))
                let resultadoSuma = accionSumar(number1, number2)
                alert("La suma de " + number1 + " y " + number2 + " es " + resultadoSuma);
                break;
            default:
                alert("Solo puedes seleccionar entre las opciones % y +")
                break;
        }
        calculo = prompt("Escriba % si desea calcular un porcentaje o un signo + si desea sumar dos números o presiona 0 para salir ")
    }
} else {
    alert("Lo siento, corroboramos que no eres un humano y no alcanzas los conocimientos basicos de la inteligencia artificial como para continuar. Gracias de todos modos por tu interes en realizar calculos matemáticos")
}