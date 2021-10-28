let express = require('express');
let app = express();
const port = process.env.PORT || 8080


app.get('/saludo',(req,resp) => {
let saludar = "cata es un drogadicto"
return resp.json(saludar)
});


app.listen(port, function(){
});