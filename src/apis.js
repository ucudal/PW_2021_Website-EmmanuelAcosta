let urlExp =
  "https://pw2021-apinode-emmanuelacosta.emmanuelacosta2.repl.co/experiencia-laboral";
let urlPost =
  "https://pw2021-apinode-emmanuelacosta.emmanuelacosta2.repl.co/enviar-formulario";
let modalArticle = document.getElementById("modal-formulario");
let modalFormulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let pais = document.getElementById("pais");
let comentarios = document.getElementById("comentarios");
let labelRespuesta = document.getElementById("labelRespuesta");

fetch(urlExp, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then(function (response) {
  response.text().then(function (respuesta) {
    let experiencias = JSON.parse(respuesta)["experiencia-laboral"];
    let divDownArticle = document.getElementById("down-article");
    for (let i = 0; i < respuesta.length; i++) {
      if (experiencias[i]) {
        let puesto = document.createElement("li");

        puesto.textContent = "Puesto: " + experiencias[i].puesto;

        let inicioList = document.createElement("ul");
        inicioList.classList.add("list-disc");
        inicioList.classList.add("ml-5");
        inicioList.classList.add("text-gray-600");

        let empresa = document.createElement("li");
        empresa.textContent = experiencias[i].empresa;

        let descripcion = document.createElement("li");
        descripcion.textContent = "Tareas: " + experiencias[i].descripcion;

        let fechas = document.createElement("span");

        if (
          experiencias[i].fechaInicio != null &&
          experiencias[i].fechaFin != null
        ) {
          fechas.textContent =
            experiencias[i].fechaInicio.toString().split("T")[0] +
            " al " +
            experiencias[i].fechaFin.toString().split("T")[0];
        } else {
          fechas.textContent =
            experiencias[i].fechaInicio.toString().split("T")[0] +
            " al " +
            "presente";
        }

        inicioList.appendChild(puesto);
        inicioList.appendChild(descripcion);

        let cabezal = document.createElement("h1");
        cabezal.classList.add("text-gray-700");
        cabezal.classList.add("font-semibold");
        cabezal.classList.add("mt-3");
        cabezal.textContent = empresa.textContent + ", " + fechas.textContent;
        divDownArticle?.appendChild(cabezal);
        divDownArticle?.appendChild(inicioList);
      }
    }
  });
});

modalFormulario?.addEventListener("submit", (e) => {
  e.preventDefault();
  let request = {
    nombreContacto: nombre.value,
    apellido: apellido?.textContent,
    email: email?.textContent,
    comentarios: comentarios?.textContent,
    pais: pais?.textContent,
  };
  fetch(urlPost, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  }).then(function (response) {
    response.text().then(function (res) {
      if (labelRespuesta != null) {
        labelRespuesta.classList.add("border-2")
        labelRespuesta.textContent = res;
      }
    });
  });
});
