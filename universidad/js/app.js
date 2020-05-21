// let elemento;

// elemento = document;
// elemento = document.all;
// elemento = document.all[10];
// elemento = document.head;
// elemento = document.body;
// elemento = document.domain;
// elemento = document.URL;
// elemento = document.characterSet;
// elemento = document.forms;
// elemento = document.forms[0];
// elemento = document.forms[0].id;
// elemento = document.forms[0].className;
// elemento = document.forms[0].classList;
// elemento = document.forms[0].classList[0];
// elemento = document.images;
// elemento = document.images[2];
// elemento = document.images[2].getAttribute("src");
// elemento = document.scripts;
// elemento = document.images;

// let imagenes = document.images;

// let imagenesArr = Array.from(imagenes);

// imagenesArr.forEach((imagen) => console.log(imagen));

// // console.log(elemento);
// console.log(imagenesArr);
// getElementById

// let encabezado;

// encabezado = document.getElementById("encabezado");

// encabezado.style.background = "#333";
// encabezado.style.color = "#fff";
// encabezado.style.padding = "20px";
// encabezado.textContent = "Los mejores Cursos";

// console.log(encabezado);

// Query Selector

// const encabezado = document.querySelector(".card img");

// Aplicar CSS
// encabezado.style.background = "#333";
// encabezado.style.color = "#fff";
// encabezado.style.padding = "20px";
// encabezado.textContent = "Los mejores cursos";

// console.log(encabezado);

// let enlace;

// enlace = document.querySelector("#principal a:first-child");

// enlace = document.querySelector("#principal a:nth-child(3)");

// enlace = document.querySelector("#principal a:last-child");

// console.log(enlace);
// getElementByClassName

// let enlaces = document.getElementsByClassName("enlace")[3];

// enlaces.style.background = "#333";

// console.log(enlaces);

//getElementsByTagName
// let links = document.getElementsByTagName("a");

// let enlaces = Array.from(links);

// enlaces.forEach((enlace) => {
//   console.log(enlace.textContent);
// });
// console.log(links);

// const enlaces = document.querySelectorAll("#principal .enlace");

// console.log(enlaces);

// let enlaces = document.querySelectorAll("#principal a:nth-child(odd)");

// enlaces.forEach((impares) => {
//   impares.style.backgroundColor = "red";
//   impares.style.color = "white";
// });

// console.log(enlaces);

// traversing padre a hijo
// const navegacion = document.querySelector("#principal");

// console.log(navegacion.children);

// console.log(navegacion.children[0].nodeType);

// Tipos de nodos
// 1 = Elementos
// 2 = Atributos
// 3 = Text Node
// 8 = Comentarios
// 9 = Documentos
// 10 = Doctype

// traversing hijo a padre

// const enlaces = document.querySelectorAll(".enlace");

// console.log(enlaces[0].parentElement);

// previousElementSibling
// const enlaces = document.querySelectorAll(".enlace");

// console.log(enlaces[4].previousElementSibling);

// nextElementSibling
// const enlaces = document.querySelectorAll(".enlace");

// console.log(enlaces[0].nextElementSibling);

// Crear enlace
// const enlace = document.createElement("a");

// // Agregamos una clase
// enlace.className = "enlace";
// enlace.id = "nuevo-id";

// // atributo de href

// enlace.setAttribute("href", "#");

// // añadir texto
// enlace.textContent = "Nuevo enlace";

// //agregar al html

// document.querySelector("#secundaria").appendChild(enlace);

// console.log(enlace);

// Modificaciones en el DOM

// const nuevoEncabezado = document.createElement("h2");

// // agregar un id
// nuevoEncabezado.id = "encabezado";

// // agregar nuevo texto
// nuevoEncabezado.appendChild(document.createTextNode("Los Mejores Cursos"));

// // elemento anterior (sera remplazado)

// const anterior = document.querySelector("#encabezado");

// // elemento padre
// const elPadre = document.querySelector("#lista-cursos");

// elPadre.replaceChild(nuevoEncabezado, anterior);

// console.log(anterior.parentElement);

// agregando y quitando clases y atributos
// const enlaces = document.querySelectorAll(".enlace");
// const navegacion = document.querySelector("#principal");

// console.log(navegacion);

// const primerLi = document.querySelector(".enlace");

// let elemento;

// // obtener una clase de CSS
// elemento = primerLi.className;
// elemento = primerLi.classList.add("nueva-clase");
// elemento = primerLi.classList.remove("nueva-clase");
// elemento = primerLi.classList;

// // Leer atributo

// elemento = primerLi.getAttribute("href");
// primerLi.setAttribute("href", "https://facebook.com");
// primerLi.setAttribute("data-id", 20);
// elemento = primerLi.hasAttribute("data-id");
// primerLi.removeAttribute("data-id");

// elemento = primerLi;

// console.log(elemento);

// EvenListener click

// Metodo 1
// document
//   .querySelector("#submit-buscador")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     alert("Buscando Cursos");
//   });

// Metodo 2
// document
//   .querySelector("#submit-buscador")
//   .addEventListener("click", ejecutarBoton);

// function ejecutarBoton(event) {
//   event.preventDefault();

//   let elemento;

//   elemento = event.target;
//   elemento = event.target.id;
//   elemento = event.target.className;

//   console.log(elemento);
// }

// variables

const encabezado = document.querySelector("#encabezado");
const enlaces = document.querySelectorAll(".enlace");
const boton = document.querySelector("#vaciar-carrito");

//CLICK

// boton.addEventListener("click", obtenerEvento);

// Doble click

// boton.addEventListener("dblclick", obtenerEvento);

// Mouse Enter
// boton.addEventListener("mouseenter", obtenerEvento);

// Mouse Leave
// boton.addEventListener("mouseleave", obtenerEvento);
// Mouse Over
// boton.addEventListener("mouseover", obtenerEvento);

// Mouse out
// boton.addEventListener("mouseout", obtenerEvento);

// Mouse Down
// boton.addEventListener("mousedown", obtenerEvento);

// Mouse up
// boton.addEventListener("mouseup", obtenerEvento);

// Mouse Move
// encabezado.addEventListener("mousemove", obtenerEvento);

// function obtenerEvento(e) {
//   console.log(`EVENTO: ${e.type}`);
// }

// Eventos de inputs

const busqueda = document.querySelector("#buscador");

// keydown
// busqueda.addEventListener("keydown", obtenerEvento);

//keyup
// busqueda.addEventListener("keyup", obtenerEvento);

// keypress
// busqueda.addEventListener("keypress", obtenerEvento);

// focus
// busqueda.addEventListener("focus", obtenerEvento);

// blur
// busqueda.addEventListener("blur", obtenerEvento);

// cut
// busqueda.addEventListener("cut", obtenerEvento);

//copy
// busqueda.addEventListener("copy", obtenerEvento);

//paste
// busqueda.addEventListener("paste", obtenerEvento);

// input
// busqueda.addEventListener("input", obtenerEvento);

//change
// busqueda.addEventListener("change", obtenerEvento);

// function obtenerEvento(e) {
//   // document.querySelector("#encabezado").innerText = busqueda.value;
//   console.log(`EVENTO: ${e.type}`);
// }

// Event Bubbling

// const card = document.querySelector(".card");
// const infoCurso = document.querySelector(".info-card");

// const agregarCarrito = document.querySelector(".agregar-carrito");

// card.addEventListener("click", function (e) {
//   console.log("Click en card");
//   e.stopPropagation();
// });

// infoCurso.addEventListener("click", function (e) {
//   console.log("Click en Info Curso");
//   e.stopPropagation();
// });

// agregarCarrito.addEventListener("click", function (e) {
//   console.log("Click en Agregar Carrito");
//   e.stopPropagation();
// });

// Delegation

// document.body.addEventListener("click", eliminarElemento);

// function eliminarElemento(e) {
//   e.preventDefault();

//   if (e.target.classList.contains("borrar-curso")) {
//     console.log(e.target.parentElement.parentElement.remove());
//   }

//   if (e.target.classList.contains("agregar-carrito")) {
//     console.log("curso agregado");
//   }
// }

// LocalStorage

// Agregar

// localStorage.setItem("nombre", "Gilbert");

// Session Storage

// sessionStorage.setItem("nombre", "Gilbert");

// Eliminar de localstorage

// localStorage.setItem("nombre", "Gilbert");

// const nombre = localStorage.getItem("nombre");

// console.log(nombre);

// localStorage.clear();
