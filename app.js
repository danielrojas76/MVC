const express = require('express');
let rutasProductos = require('./src/routes/productos.js');
let rutasMain = require('./src/routes/main.js');

let app = express();

app.listen(3000, () => console.log('Puerto abierto en 3000'));

app.use('/productos', rutasProductos);
app.use('/', rutasMain);
