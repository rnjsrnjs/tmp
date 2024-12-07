const express = require('express');
const app = express();

app.set('port',3000);
app.use(function(req,res,next){
    console.log('First Middleware');
    res.status(200).send('<h1>Welcome!</h1>');});
app.listen(app.get('port'),()=>{
    console.log('Server listening on port 3000');});
