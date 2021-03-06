//Arrow functions
//no se puede utilizar arrow functions en la declaracion de la funcion,
//pero si en la expresion de la funcion

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(3, 5);

const aprendiendo = (tecnologia) => {
  console.log(`Aprendiendo: ${tecnologia}`);
};
aprendiendo(JavaScript);

//me traje todo lo del archivo 13arrays.js

//Array methods
const meses = ["enero", "febrero", "marzo", "abril", "mayo"];

const carritos = [
  { nombre: "monitor de 20 pulgadas", precio: 500 },
  { nombre: "television de 50 pulgadas", precio: 700 },
  { nombre: "tablets", precio: 300 },
  { nombre: "audifono", precio: 200 },
  { nombre: "teclado", precio: 50 },
  { nombre: "celular", precio: 500 },
  { nombre: "bocinas", precio: 300 },
  { nombre: "laptop", precio: 800 },
];

//for Each
meses.forEach((mes) => {
  if (mes == "marzo") {
    console.log("Marzo si existe");
  }
});
let resultado;

//Some ideal para arreglos de objetos
resultado = carritos.some((producto) => producto.nombre === "celular");

//reduce toma todo los numeros y devuelve un resultado
resultado = carritos.reduce((total, producto) => total + producto.precio, 0);

//filter
resultado = carritos.filter((producto) => producto.precio > 400);

resultado = carritos.filter((producto) => producto.nombre !== "celular");

console.log(resultado);
