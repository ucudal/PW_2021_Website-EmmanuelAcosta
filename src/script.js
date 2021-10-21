var form = document.getElementById("formulario");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

var a = 0;
var listUser = [];

function Persona(nombre, apellido, correo, pais, empresa, comentarios) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.correo = correo;
  this.pais = pais;
  this.empresa = empresa;
  this.comentarios = comentarios;
}

function mostrarPersonas() {
  alert(listUser);
}

let botonContacto = document.getElementById("open-btn");
let modal = document.getElementById("modal-formulario");
let botonCerrar = document.getElementById("close-btn");

cerrarModal();
setUpButtons();

function setUpButtons() {
  window.onclick = function (event) {
    if (event.target == document.getElementById("modal-formulario")) {
      cerrarModal();
    }
  };
  botonCerrar.onclick = cerrarModal;
  botonContacto.onclick = abrirModal;
  // If user touches outside the modal, close it
}

function agregarPersona() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var pais = document.getElementById("pais").value;
  var empresa = document.getElementById("empresa").value;
  var comentarios = document.getElementById("comentarios").value;
  var persona = new Persona(nombre, apellido, pais, empresa, comentarios);
  // ¡Cambiar y poner persona!
  listUser.push(nombre + apellido + empresa);
  cerrarModal();
}

function cerrarModal() {
  modal?.classList.add("esconder-modal");
}

function abrirModal() {
  modal?.classList.remove("esconder-modal");
}

function limpiarCampos() {
    console.log("CAMPOS A LIMPIAR")
}
