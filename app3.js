const express = require('express');
const app =express();

app.use (function(req,res,next){
    console.log('First Middleware...');
    req.user ='KMS';
    next();
});
app.use(function(req,res,next){
    console.log('Second...');
    res.status(200).send(`<h1>${req.user}respond at Express Server</h1>`);
});
app.listen(3000);
