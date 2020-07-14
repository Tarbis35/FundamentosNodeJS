async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola '+ nombre);
            resolve(nombre);
        }, 1000);
    });
}
async function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Bla bla bla bla...');
            resolve(nombre);
            // reject('Error hablando')
        },2000);
    });

}
async function adios(nombre, otroCallback){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Adios '+nombre);
            resolve(nombre);
        },3000);
    });
}
async function main(){
    let nombre = await hola('Leo');
    await hablar(nombre);
    await hablar(nombre);
    await hablar(nombre);
    await adios(nombre);
}
console.log('Comieneza el proceo');
main();
console.log('Termina el proceco');