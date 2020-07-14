function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola '+ nombre);
            resolve(nombre);
        }, 1000);
    });
}
function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Bla bla bla bla...');
            //resolve(nombre);
            reject('Error hablando')
        },2000);
    });

}
function adios(nombre, otroCallback){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Adios '+nombre);
            resolve(nombre);
        },3000);
    });
}

console.log('comensando el proceso ...');
hola('Leo')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
    console.log('terminado el proceso ...').catch(error=>{
        console.error('Hubo un error');
        console.error(error);
    });
});