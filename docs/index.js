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

/*let button = document.getElementById("open-btn");
let backdrop;
let modal;
let text_modal;

const desplegar = () => {
  if (modal) return;

  //modal
  modal = document.createElement("div");
  modal.className = "modal";

  //backdrop
  backdrop = document.createElement("div");
  backdrop.className = "backdrop";

  //text
  text_modal = document.createElement("p");
  text_modal.textContent = "¿Estás seguro?";

  //Accept
  let buttonAccept = document.createElement("button");
  buttonAccept.textContent = "Aceptar";
  buttonAccept.addEventListener("click", cerrarModal);
  buttonAccept.className = "bg-green-500 p-2 rounded-md text-white";

  //Cancel
  let buttonCancel = document.createElement("button");
  buttonCancel.textContent = "Cancelar";
  buttonCancel.addEventListener("click", cerrarModal);
  buttonCancel.className = "bg-red-500 p-2 rounded-md text-white";

  //agregar al modal
  modal.append(text_modal);
  modal.append(buttonAccept);
  modal.append(buttonCancel);
  modal.append(backdrop);

  // agregar al body
  document.body.append(modal);
};

const cerrarModal = () => {
    backdrop.remove();
    backdrop = null;
    modal.remove();
    modal = null;
};

button.addEventListener("click", desplegar);*/
