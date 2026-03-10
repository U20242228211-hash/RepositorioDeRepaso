const formulario = document.getElementById("formularioContacto");
const mensajeFormulario = document.getElementById("mensajeFormulario");
const botonTema = document.getElementById("botonTema");

function mostrarMensaje(texto, tipo) {
  if (!mensajeFormulario) return;
  mensajeFormulario.className = `alert alert-${tipo} mt-3 mb-0`;
  mensajeFormulario.textContent = texto;
}

if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const servicio = document.getElementById("servicio");
    const mensaje = document.getElementById("mensaje");

    if (!nombre.value.trim()) {
      mostrarMensaje("Por favor escribe tu nombre.", "danger");
      nombre.focus();
      return;
    }

    if (!correo.value.trim()) {
      mostrarMensaje("Por favor escribe tu correo.", "danger");
      correo.focus();
      return;
    }

    if (!correo.value.includes("@") || !correo.value.includes(".")) {
      mostrarMensaje("Correo no valido.", "danger");
      correo.focus();
      return;
    }

    if (!servicio.value.trim()) {
      mostrarMensaje("Selecciona un servicio.", "danger");
      servicio.focus();
      return;
    }

    if (!mensaje.value.trim()) {
      mostrarMensaje("Escribe un mensaje.", "danger");
      mensaje.focus();
      return;
    }

    mostrarMensaje("Formulario enviado correctamente.", "success");
    formulario.reset();
  });
}

if (botonTema) {
  botonTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-alterno");
  });
}
