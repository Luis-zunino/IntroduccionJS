//diferencias entre funciones es el "joistin"
//Javascript se ejecuta en dos vueltas, en la primer vuelta se registran
// todas las funciones que hayan y luego los llamados a las funciones
//la primer etapa se la llama etapa de registro/creacion  y  la segunda de ejecucion

//declaracion de una funcion
sumar();
function sumar() {
  console.log(10 + 10);
}


//expresion de la funcion
sumar2();
const sumar2 = function () {
  console.log(3 + 3);
};
//a lo que la segunda se la reconoce como una variable, en la primer pasada no se reconoce
//por lo tanto da error


