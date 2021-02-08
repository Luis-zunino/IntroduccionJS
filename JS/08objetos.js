//objetos

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;


const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


// console.log(producto.nombreProducto);
// console.log(producto.precio);//de esta manera se accede a los datos
// console.log(producto["precio"]);//asi tambien pero menos usada

//agregar nueva propiedades
producto.imagen = "imagen.jpg";


//elimianr propiedades
delete producto.disponible;
console.log(producto);
