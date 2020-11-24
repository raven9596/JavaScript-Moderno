function saludar(nombre) {
  // console.log(arguments);
  // console.log("Hola " + nombre);
  return [1, 2];

  // Esto nunca se va a ejecutar
  console.log("Soy un codigo que esta despues del return");
}

const saludar2 = function (nombre) {
  console.log("Hola " + nombre);
};

const saludarFlecha = () => {
  console.log("Hola Flecha");
};

const saludarFlecha2 = (nombre) => {
  console.log("Hola " + nombre);
};

const retornoDeSaludar = saludar("Gilbert", 40, true, "Santo Domingo"); // 1

// saludar2("Gilbert");

// saludarFlecha();
// saludarFlecha2("Vianka");

function sumar(a, b) {
  return a + b;
}

// const sumar = (a, b) => {
//   return a + b;
// }

const sumar2 = (a, b) => a + b;

function getAletorio() {
  return Math.random();
}

const getAletorio2 = () => Math.random();

console.log(getAletorio2());
