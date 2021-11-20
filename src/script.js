var form = document.getElementById("formulario");
function handleForm(event) {
  event.preventDefault();
}
if (form != null) {
  form.addEventListener("submit", handleForm);
}

var a = 0;
var listUser = [];

class Persona {
  nombre
  apellido
  correo
  pais
  empresa
  comentarios
  constructor(nombre, apellido, correo, pais, empresa, comentarios) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.pais = pais;
    this.empresa = empresa;
    this.comentarios = comentarios;

  }
}

function mostrarPersonas() {
  alert(listUser);
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

function agregarPersona() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var pais = document.getElementById("pais").value;
  var correo = document.getElementById("correo").value;
  var empresa = document.getElementById("empresa").value;
  var comentarios = document.getElementById("comentarios").value;
  var persona = new Persona(nombre, apellido,correo, pais, empresa, comentarios);
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
