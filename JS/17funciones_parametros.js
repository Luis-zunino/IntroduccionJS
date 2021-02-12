//funciones con parametros

function sumar(numero1 = 0, numero2 = 0) {
  //numero 1 y 2 son los parametros de la funcion
  //si asociamos los parametros a 0 evitamos errores en caso de que nos falten datos
  console.log(numero1 + numero2);
}
sumar(); //aca van los valores reales de la funcione

//expresion de la funcion
const sumar2 = function () {
  console.log(3 + 3);
};
sumar2();

