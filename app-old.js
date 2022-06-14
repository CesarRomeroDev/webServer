const http = require('http');


//* Crear servidor

/**
 * @req  Toda la información del url del sitio web.
 * @res  Servidor que responde al cliente
 */
http.createServer((req, res) => {

    res.write('Hola Mundo');
    res.end();
})
.listen(8080);
console.log('escuchando en el puerto', 8080);