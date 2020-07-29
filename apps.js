//requireds
const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');

let base = 3;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throwerr;
    console.log(`el archivo tabla-${base}.txt ha sido creado`);
});