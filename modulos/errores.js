function funcionPadre(){
    serompe();
}

function serompe(){
    return 3+z;
}

function seRompeAsync(cb){
    setTimeout(() => {
        try{
            return 3+z;
        }catch(err){
            console.error('error en proceso async');
            cb(err);
        }
    }, 2000);
}
try{
    seRompeAsync((err)=> {
        console.error(err.message+'. Error al ejecutar el proceso ascincrono');
    });
}catch(error){
    console.error('se rompio');
    console.error(error.message);
}

console.error('esto va despues');
