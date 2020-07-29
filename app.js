const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 1;

crearArchivo(base)
    .then(archivo => console.log(`Arhcivo creado: ${ archivo }`))
    .catch(e => console.log(e));