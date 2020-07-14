const { exec } = require('child_process');
const { spawn } = require('child_process');
// const exec = require('child_process').exec;

// exec('dir', (err, stdout, sterr)=>{
//     if (err){
//         console.error(err);
//         return false
//     }

//     console.log(stdout);
// });

let proceso = spawn('dir');

