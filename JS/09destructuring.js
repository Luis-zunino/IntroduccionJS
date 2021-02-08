//Destructuring de Objetos

const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//forma anterior
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto; // en este caso precio y nombreProducto
//son propiedades de la variable producto

// console.log(precioProducto);
// console.log(nombreProducto);

//Destructuring (sacar de una estructura)
const { precio, nombreProducto } = producto; //crea la variable y
//extraemos el valor en un solo paso

console.log(precio);
console.log(nombreProducto);
