let nombreSc = document.getElementById("nombre");
let apellidoSc = document.getElementById("apellido");
let emailSc = document.getElementById("email");
let paisSc = document.getElementById("pais");
let comentariosSc = document.getElementById("comentarios");
var form = document.getElementById("formulario");
function handleForm(event: any) {
  event.preventDefault();
}
if (form != null) {
  form.addEventListener("submit", handleForm);
}

let botonContacto = document.getElementById("open-btn");
let modal = document.getElementById("modal-formulario");
let backdrop = document.getElementById("backdrop");
let botonCerrar = document.getElementById("close-btn");
cerrarModal();
setUpButtons();

function setUpButtons() {
  window.onclick = function (event) {
    if (event.target == document.getElementById("backdrop")) {
      cerrarModal();
    }
  };
  if (botonCerrar != null && botonContacto != null) {
    botonCerrar.onclick = cerrarModal;
    botonContacto.onclick = abrirModal;
  }

}
function cerrarModal() {
  modal?.classList.add("esconder-modal");
  limpiarCampos();
}

function abrirModal() {
  modal?.classList.remove("esconder-modal");
}

function limpiarCampos() {
  if (nombreSc != null && apellidoSc != null && comentariosSc != null && emailSc != null && paisSc != null) {
    nombreSc.value = "";
    apellidoSc.value = "";
    comentariosSc.value = "";
    emailSc.value = "";
    paisSc.value = "";
  }
}
