const express = require('express');
const app =express();

app.use(function(req, res, next){
    res.writeHead(200,{'content-type':'text/html;charset=utf8'});
    res.end('<h1>epressfsmkfmsal;f !</h1>');
});
app.listen(3000,()=>{
    console.log('3000');
});
