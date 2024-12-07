const express = require('express');
const app =express();

app.use ('/',(req,res,)=>{
    res.status(200).send('<h1>Welcome to my home!!</h1>');
});
app.get('/about',(req,res)=>{
    res.status(200).send(`respond at Express Server</h1>`);
});
app.listen(3000);
