//arreglos/ arrays
//los arreglos sirven para agrupar elementos del mismo tipo o relacionados
// {} objetos
// [] arrays

const numeros = [10, 20, 30, 40];

const meses = [enero, febrero, marzo, abril, mayo];
console.table(meses);
//acceder a los valores de un arreglo
console.log(numeros[4]);

//conocer la extencion de los strings
console.log(numeros.length);

//recorrer un arreglo
//forEach por cada elemento del arreglo estara interando
numeros.forEach(function (numero) {
  console.log(numero);
});

//formas de agregar elementos a un arreglo

numeros[6] = 60;

/*esto agrega el numero 60 pero tenemos el problema que debemos conocer la cantidad 
de elementos del arreglo, de otra manera modificaria los existentes*/

numeros.push(60, 70, 80); //agrega al principio

/*se puede agregar cuantos elementos se quiere sin necesidad de saebr la extencion
del arreglo. No se recomienda modifcar los datos de los arreglos*/

numeros.unshift(-10, -20, -30); //agregan al final

//maneras de eliminar elementos

numeros.pop(); // elimina el ultimo elemento del arreglo
numeros.shift(); //elimina el primero elemento del arreglo

numeros.splice(); //para eliminar un elemento/s que yo quiera, toma dos valores
console.table(numeros);

//Rest Operator o Spread Operator

const nuevoArreglo = [...meses, "junio"];
console.table(nuevoArreglo);
