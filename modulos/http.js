const http = require('http');

http.createServer(router).listen(3000);



function router(request, response){
    // 
    console.log('nueva peticion!');
    console.log(request.url);
    switch(request.url){
        case'/hola':
            response.write('Hola usuairo');
            response.end();
            break;
        default:
            response.write('Error 404: No se lo que quieres');
            response.end();
    }
    response.writeHead(201, {'content-Type':'text/plain'});
    // escribir respuesta al usuario
    // response.write('Hola ya se usar http de Node.js');
    // response.end();


}

console.log("escuchando http en el puerto 3000");