document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos del DOM con querySelector
    const resultadoElement = document.querySelector(".resultado");
    const valor1Element = document.querySelector("#valor1");
    const valor2Element = document.querySelector("#valor2");
    const btnSumarElement = document.querySelector("#btnSumar");
    const btnRestarElement = document.querySelector("#btnRestar");

    // Función para realizar operaciones
    function realizarOperacion(operacion) {
        const valor1 = parseFloat(valor1Element.value) || 0;
        const valor2 = parseFloat(valor2Element.value) || 0;
        const resultado = operacion === "sumar" ? valor1 + valor2 : Math.max(valor1 - valor2, 0);
        resultadoElement.textContent = resultado;
    }

    // Funciones específicas para cada operación
    const sumar = () => {
        realizarOperacion("sumar");
    }

    const restar = () => {
        realizarOperacion("restar");
        console.log('Si el resultado es negativo será igual a 0 !!!')
    }

    // Evento de clic para la suma
    btnSumarElement.addEventListener("click", sumar);

    // Evento de clic para la resta
    btnRestarElement.addEventListener("click", restar);

    // Validar la entrada del usuario (opcional)
    valor1Element.addEventListener("input", function () {
        validarEntradaNumerica(valor1Element);
    });

    valor2Element.addEventListener("input", function () {
        validarEntradaNumerica(valor2Element);
    });

    // Función para validar la entrada numérica
    const validarEntradaNumerica = (elemento) => {
        const valor = elemento.value;
        // Permitir solo números y un punto decimal
        elemento.value = valor.replace(/[^0-9.]/g, "");
    }
});


