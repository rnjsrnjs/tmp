const express= require('express');
const app = express();

app.use(function(req,res,next){
    res.send({name:'kms',age:30});
});

app.listen(3000);

