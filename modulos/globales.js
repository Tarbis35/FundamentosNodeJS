let i=0;
let intervalo = setInterval(function(){
    console.log("Hola");
    if(i ===3){
        clearInterval(intervalo)
    }
    i++;
},1000);

setImmediate(function(){
    console.log("de inmediato");
});

// console.log(process);
// directorio del archivo
console.log(__dirname);
// directorio con nombre del archivo
console.log(__filename);

global.miVariable ='un valor cualquiera';
console.log(miVariable);