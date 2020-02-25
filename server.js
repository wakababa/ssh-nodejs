// need imports here
const express = require('express')
const app = express();
const exec = require('child_process').exec;

// get respond function 
app.get('/',(req,res)=>{
     
     //command type 
     const firstcommand = "ls";
    
     //execute command ssh 
    exec(firstcommand, function (err, stdout, stderr) {
        console.log(err, stdout, stderr)
      })
     
     // send message to website for client side
    res.send('done');
    
});
// listen port and console message for server
app.listen(3000,console.log('server started'));
