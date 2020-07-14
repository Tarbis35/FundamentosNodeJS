// console.
console.log('console log');
console.info('console info');
console.error('console error');
console.warn('console warning');

var tabla = [
    {
        a:  1,
        b:  'Z'
    },
    {
        a: 2,
        b:'Otra'
    }

]
console.log(tabla);
console.table(tabla);



console.group('conversacion');
console.log('hola');
console.group('contenido');
console.log('bla bla bla');
console.log('bla bla bla');
console.log('bla bla bla');
console.groupEnd('contenido');
console.log('adios');
console.groupEnd('conversacion finalizada');

console.log('otra cosa de otra funcion');


function function1(){
    console.group('function1');
    console.log('esto es de la funcion ');
    console.log('esto tambien');
    function2();
    console.groupEnd('function1');
}

function function2(){
    console.group('function2');
    console.log('iniciamos funcion 2');
    console.log('esto sigue siendo de la funcion 2');
    console.groupEnd('function2');
    
}

function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');