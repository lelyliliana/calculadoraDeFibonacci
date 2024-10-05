// Función que calcula la serie de Fibonacci hasta el número ingresado
function calcularFibonacci() {
    // Obtenemos el valor del número ingresado por el usuario
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    // Limpiamos el contenido previo
    resultado.innerHTML = '';

    // Verificamos que el número sea válido
    if (isNaN(numero) || numero < 1) {
        resultado.innerHTML = 'Por favor, introduce un número válido mayor o igual a 1.';
        return;
    }

    // Generamos la serie de Fibonacci
    let fibonacci = [0, 1];  // Los primeros dos números de la serie
    for (let i = 2; i < numero; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    // Mostramos el resultado
    resultado.innerHTML = 'Serie de Fibonacci: ' + fibonacci.slice(0, numero).join(', ');
}

// Función para reiniciar la calculadora
function reiniciar() {
    // Limpiamos el campo de entrada y el resultado
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
}

