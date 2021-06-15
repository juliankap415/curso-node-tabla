//para realizar esto se tiene que haber instalado yargs --> npm i yargs
const argv = require('yargs') // esto crea un objeto y recibe todo lo que enviemos por consola con '--'
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true, //que se exija el dato,
                    describe: 'Es la base de la tabla a multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Hasta cuanto se multiplica'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;

// Argunmentos de entrada --version 
// console.log(process.argv);
//los dos primeros parametros son la ruta node y del archivo js
// const[ , , arg3 = 'base = 5'] = process.argv;
// const[ , base = 5] = arg3.split("=");

module.exports = argv;