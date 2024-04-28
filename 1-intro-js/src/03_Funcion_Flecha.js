const obtenerinfo = (name= 'Miguel', apellido= 'Enriquez')=> `${name} ${apellido}`;
const suma = (a= 0, b= 0) => a + b;  

const info = obtenerinfo('Angel', 'Garcia');

console.log(info);
console.log(suma(20,10));