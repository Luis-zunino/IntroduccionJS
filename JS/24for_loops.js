//For Loops

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`El número ${i} es par`);
//   }else{
//     console.log(`El número ${i} es impar`);

//   }
// }

// const carritos = [
//   { nombre: "monitor de 20 pulgadas", precio: 500 },
//   { nombre: "television de 50 pulgadas", precio: 700 },
//   { nombre: "tablets", precio: 300 },
//   { nombre: "audifono", precio: 200 },
//   { nombre: "teclado", precio: 50 },
//   { nombre: "celular", precio: 500 },
//   { nombre: "bocinas", precio: 300 },
//   { nombre: "laptop", precio: 800 },
// ];

// for (let i = 0; carritos.length > i; i++) {
//   console.log(carritos[i].nombre);
// }

//While Loop

let i = 0; //indice

// while (i < 10 /*condicion*/) {
//   console.log(i);
//   i++; //incremento
// } //en este caso si la condicion no es verdadera no ejecuta nada

//Do while Loop

do {
  console.log(i);
  i++;
} while (i < 10); //se ejecuta al menos una vez, por mas que la conducion no se cumpla
