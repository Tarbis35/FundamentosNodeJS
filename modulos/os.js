const os = require('os');
const { maxHeaderSize } = require('http');

console.log('Arquitectura');
console.log(os.arch());

console.log('Plataforma');
console.log(os.platform());


console.log('CPUs');
console.log(os.cpus());
console.log('numero de nucleos');
console.log(os.cpus().length);

console.log('Constantes');
console.log(os.constants);

const SIZE = 1024;
function kb(bytes){return bytes/ maxHeaderSize;}
function mb(bytes){return kb(bytes)/SIZE;}
function gb(bytes){return mb(bytes)/SIZE;}

console.log('Memoria libre');
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));

console.log('Home dir');
console.log(os.homedir());

console.log('Tmp dir');
console.log(os.tmpdir());

console.log('Hostname');
console.log(os.hostname());

console.log('Network interfacecs');
console.log(os.networkInterfaces());