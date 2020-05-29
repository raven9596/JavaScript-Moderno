// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

// EventListener
eventListeners();

function eventListeners() {
  // Inicio de la aplicacion y deshabilitar submit
  document.addEventListener('DOMContentLoaded', inicioApp);

  // Campos del formulario
  email.addEventListener('blur', validarCampo);
  asunto.addEventListener('blur', validarCampo);
  mensaje.addEventListener('blur', validarCampo);

  // Boton de enviar en el submit
  formularioEnviar.addEventListener('submit', enviarEmail);

  // Boton de reset
  resetBtn.addEventListener('click', resetFomulario);
}

// Funciones

function inicioApp() {
  // deshabilitar el envio
  btnEnviar.disabled = true;
}

// valida que el campo tenga algo escrito

function validarCampo() {
  // se valida la longitud del texto y que no es vacio
  validarLongitud(this);

  // validar unicamente el email
  if (this.type === 'email') {
    validarEmail(this);
  }

  let errores = document.querySelectorAll('.error');
  if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
    if (errores.length === 0) {
      btnEnviar.disabled = false;
    }
  }
}

// Resetear el formulario
function resetFomulario(e) {
  formularioEnviar.reset();
  e.preventDefault();
}

// Cuando se envia el correo

function enviarEmail(e) {
  // Spinner al presionar enviar
  const spinnerGif = document.querySelector('#spinner');
  spinnerGif.style.display = 'block';

  // Gif que envia email
  const enviado = document.createElement('img');
  enviado.src = 'img/mail.gif';

  // ocultar Spinner y mostrar gif de enviado
  setTimeout(() => {
    spinnerGif.style.display = 'none';

    document.querySelector('#loaders').appendChild(enviado);

    setTimeout(() => {
      enviado.remove();
      formularioEnviar.reset();
    }, 5000);
  }, 3000);
  e.preventDefault();
}

// verifica la longitud del texto
function validarLongitud(campo) {
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
  } else {
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
  }
}

function validarEmail(campo) {
  const mensaje = campo.value;
  if (mensaje.indexOf('@') !== -1) {
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
  } else {
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
  }
}
