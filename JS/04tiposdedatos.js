//Cuando nos referimos a tipos de datos,
// nos referimos al tipo de valor que le asignamos a una variable

//String o cadenas de texto
const tweet = "Aprendinndo JavaScript con el curso de Dearrollo Web Completo";
const producto1 = String("Monitor de 20 pulgadas");
const producto2 = new String("Monitor de 20 pulgadas");

console.log(typeof tweet); // es un string
console.log(typeof producto1); // es un string
console.log(typeof producto2);// es un objeto por su forma de estar definido con el new

console.log(tweet.length);//te dice la extencion del string

//indexOf es un metodo que te permite saber en que 
//posicion se encuentra determinada palabra o letra
console.log(tweet.indexOf("JavaScript"));
//si la consola indica un -1 es porque no logro hallar lo que se busca

//include te retorna (true o false)
console.log(tweet.includes("JavaScript"));

