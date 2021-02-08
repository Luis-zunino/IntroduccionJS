"use strict";// exige que se utilicen las nuevas practicas


//objeto methods
const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
}

//Object.freeze(producto);
// no permite AGREGAR, QUITAR o MODIFICAR los valores

// producto.imagen = "imagen.jpg";

//console.log(Object.isFrozen(producto));
// indica si el objeto esta limitado a agregar mas valores

Object.seal(producto);
// no permite AGREGAR, QUITAR pero SI MODIFICAR los valores

console.log(Object.isSealed(producto));