const carro = {
    marca: "Seat",
    modelo: "Fr",
    anio: "2018",
    nombre: "Leon"
}

const detalle = ({ marca, modelo, nombre }) => {
    console.log(`El vehiculo de la marca ${marca} es modelo ${modelo} y su nombre es ${nombre}`);
}

detalle(carro)