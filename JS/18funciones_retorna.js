//funciones que retornan valores

function sumar(n1, n2) {
  return n1 + n2; //no lo imprime en pantalla sino que lo retorna
  //a la viarable que nosotros creamos
}

const resultado = sumar();
/*==================================================================*/
let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalPagar = calcularImpuesto(total);

console.log(totalPagar);
