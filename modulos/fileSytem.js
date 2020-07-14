const fs = require('fs');
const { writer } = require('repl');

function leer(ruta, callback){
    //uta del arrchivo, objeto con el eror, data del achivo
    fs.readFile(ruta, (err, data)=>{
        //archivo leido
        console.log(data.toString());
    })
}

function write(ruta, contenido, callback){
    fs.writeFile(ruta, contenido,function(err,){
        if (err){
            console.log('No se ha podido escribi en el archivo '+err)
        }else{
            console.log('se ha escrito el archivo');
        }
    });
}

function deleteFile(ruta, callback){
    fs.unlink(ruta, callback);
}

//  leer(__dirname+'/archivo11.txt', console.log);
// write(__dirname+'/archivo11.txt', 'soy un archivo nuevo', console.log);
deleteFile(__dirname+'/archivo11.txt', console.log);