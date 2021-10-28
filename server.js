let express = require('express');
let app = express();


app.get('/saludo',(req,resp) => {
let saludar = "cata es un drogadicto"
return resp.json(saludar)
});


app.listen(8080, function(){

    console.log('escuchando puerto 8080');
});