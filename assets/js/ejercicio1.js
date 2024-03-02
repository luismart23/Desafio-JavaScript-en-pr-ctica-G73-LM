const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const errorNombre = document.querySelector('.errorNombre');
const errorAsunto = document.querySelector('.errorAsunto');
const errorMensaje = document.querySelector('.errorMensaje');
const resultado = document.querySelector('#resultado');
const boton = document.querySelector('#boton');

const validarCampo = (regex, valor, errorElement, mensajeError) => {
    const trimmedValue = valor.trim();
    if (!regex.test(trimmedValue)) {
        console.error(`${mensajeError} no válido`);
        mostrarError(errorElement, `Por favor, ingrese un ${mensajeError.toLowerCase()} válido`);
        return false;
    }
    return true;
};

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.color = 'red';
    elemento.style.fontStyle = 'italic';
};

const resetearMensajes = () => {
    errorNombre.textContent = '';
    errorAsunto.textContent = '';
    errorMensaje.textContent = '';
    resultado.textContent = '';
    resultado.className = '';
};

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const textNombre = nombre.value.trim();
    const textAsunto = asunto.value.trim();
    const textMensaje = mensaje.value.trim();

    // Regex patterns
    const regexNombre = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s']+$/;
    const regexAsunto = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s']+$/;
    const regexMensaje = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s']+$/;

    // Resetear mensajes de error
    resetearMensajes();

    // Validación
    const nombreValido = validarCampo(regexNombre, textNombre, errorNombre, 'Nombre');
    const asuntoValido = validarCampo(regexAsunto, textAsunto, errorAsunto, 'Asunto');
    const mensajeValido = validarCampo(regexMensaje, textMensaje, errorMensaje, 'Mensaje');

    if (nombreValido && asuntoValido && mensajeValido) {
        mostrarResultado('Mensaje enviado con éxito!!!', 'text-success');
        formulario.reset();
    }
});

const mostrarResultado = (mensaje, clase) => {
    resultado.textContent = mensaje;
    resultado.className = clase;
};
