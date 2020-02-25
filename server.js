const express = require('express')
const app = express();
const exec = require('child_process').exec;
// var exec = require('ssh-exec')

app.get('/',(req,res)=>{
     const firstcommand = "ls";
    
     
    exec(firstcommand, function (err, stdout, stderr) {
        console.log(err, stdout, stderr)
      })
    res.send('done');
    
});

app.listen(3000,console.log('server started'));