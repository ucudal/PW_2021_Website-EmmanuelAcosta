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
  hola = [];
}

function mostrarPersonas() {
  alert(listUser);
}

function agregarPersona() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var pais = document.getElementById("pais").value;
  var empresa = document.getElementById("empresa").value;
  var comentarios = document.getElementById("comentarios").value;
  var persona = new Persona(nombre, apellido, pais, empresa, comentarios).value;
  // ¡Cambiar y poner persona!
  listUser.push(nombre + apellido + empresa);
}
