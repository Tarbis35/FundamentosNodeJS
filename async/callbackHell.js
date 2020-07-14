function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('Hola '+nombre);
        miCallback(nombre);
    }, 1000);
}
function hablar(hablarCallback){
    setTimeout(function(){
        console.log('Bla bla bla bla...');
        hablarCallback();
    },2000);
}
function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios '+nombre);
        otroCallback();
    },11000);
}

function conversar(nombre, veces, conversarCallback){
    if(veces >0){
        hablar(function(){
            conversar(nombre, --veces, conversarCallback);
        });
    }else{
        adios(nombre, function(){
            console.log('Terminando proceso...');
        });
    }
    
};

console.log('Iniciando proceso');
hola('Leo',function(nombre){
    conversar('Leo', 5, function(){
        console.log('Proceso terminado');
    });
});

// hola('Leo',function(nombre){
//     hablar(function(){
//         hablar(function(){
//             adios(nombre, function(){
//                 console.log('Terminando Proceso');
//             });
//         }); 
//     });  
// });

