// const process = require('process');

console.log();



process.on('beforeExit', ()=>{
    console.log('me voy');
});

process.on('exit', ()=>{
    console.log('Me fuí');
    setImmediate(() => {
        console.log('esto si se va a ejecutar de inmediato');
    });
    setTimeout(() => {
        console.log('esto no se va a ejecutar nunca');
    }, 1000);
});

setTimeout(() => {
    console.log('esto si se va a ejecutar');
}, 1000);

process.on('uncaughtException', (err, origin)=>{
    console.log('Se nos ha olvidado capturar este error');
    console.error(err.message);
    //console.error();
});

process.on('uncaughtRejection', ()=>{
    console.log('fallé');
});

// funcionquenoexiste();

console.log("esto si el error no se captura no sale");