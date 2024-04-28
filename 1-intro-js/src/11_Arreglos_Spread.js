const carros = ["Ferrari", "Nissan", "Porsche", "Mc Laren", "Mercedes"];

const carros2 = carros.concat("Mustang GT500", "Challenger", "Camaro");

const motos = ["Italika", "Chopper", "Ninja", "SuperSport"];

const tienda = [...carros, ...motos, "rin 18"];
const tienda2 = motos.concat(carros).concat("Rin 18");

console.log(carros2);

con1-intro-js/src/main.jssole.log(tienda2);