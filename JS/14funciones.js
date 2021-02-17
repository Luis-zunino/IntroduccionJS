//declaracion de una funcion

function sumar() {
  console.log(10 + 10);
}
sumar();//no se puede utilizar arrow functions

//expresion de la funcion

const sumar2 = function () {
  console.log(3 + 3);
};
sumar2();

//IIFE se auto llama la funcion, ademas previene que se confunda con variable de otros archivos

(function () {
  console.log("esto es una funcion");
})();
