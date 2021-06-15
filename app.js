
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');


console.clear();
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'.green))
    .catch(err => console.log(err));


//comando para ejecutar node app --b 3 --l --h 5
//Para instalar todos los modulos que requiere la aplicacion basta con npm install 