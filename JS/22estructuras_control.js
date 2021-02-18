//Estructuras de control

let puntaje = 1000;
if (puntaje == 1000) {
  console.log("El puntaje es mil");
}

const efectivo = 1000;
const carrito = 800;

if (efectivo >= carrito) {
  console.log("Si puede pagar");
} else {
  console.log("Fondos insuficientes");
}

const rol = "editor";
if (rol === "adminsitrador") {
  console.log("acceso total");
} else if (rol === "editor") {
  console.log("solo puedes acceder a algunas areas");
} else {
  console.log("no tienes acceso");
}
