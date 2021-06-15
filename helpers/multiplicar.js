const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base, listar, hasta) => {

    return new Promise((resolve, reject) =>{

        let salida = '';
        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        if(listar){
            console.log(colors.blue(salida));
        }
        resolve(`tabla-${base}.txt`);
        reject('Error');
        
    } );
}

//Lo mismo pero mas elegante
// const crearArchivo = async(base) => {

//     try{
//         let salida = '';
//         for(let i = 1; i <= 10; i++){
//             salida += `${base} x ${i} = ${base*i}\n`;
//         }
        
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         return `tabla-${base}.txt`;      
//     }
//     catch (err){
//         throw err;
//     }

// }

module.exports = {
    crearArchivo
}