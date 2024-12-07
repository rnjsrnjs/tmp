const express= require('express');
const app = express();

app.use(function(req,res,next){
    res.redirect('http://www.naver.com');
});

app.listen(3000);

