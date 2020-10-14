// 1.
'use strict'

// 2. Cargar módulos de node para crear el server
var express = require('express');
var bodyParser = require('body-parser');

// 3. Ejecutar express (http)
var app = express();

//  8. (VENIMOS DE routes) Cargar ficheros rutas
var articles_routes = require('./routes/article');



//  4. Middlewares (se ejecutan antes de cargar una ruta)
// 4.1 Para cargar y utilizar bodyparser
app.use(bodyParser.urlencoded({extended:false}));
//  4.2 Para convertir mediante body parser, cualquier petisión en JSON
app.use(bodyParser.json());
// CORS para permitir peticiones frontend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// 9. Añadir prefijos a las rutas / cargar rutas
app.use('/api', articles_routes);


// --- ANTES SEGUIR EN INDEX ---
// 6. Ruta o metodo de prueba API REST
/*
app.get('/prueba', (req, res) => {
	// var hola = req.body.hola;
	return res.status(200).send({
		curso: 'Master en Framworks JS',
		autor: 'Jomi Borras',
		url: 'estudiomanager.com'
		// `<ul>
		// 	<li>NodeJS</li>
		// 	<li>Angular</li>
		// 	<li>React</li>
		// 	<li>Vue</li>
		// </ul>`
		});
});
*/
// 7. Vamos al controller, Venimos del controller y hacemos una carpeta de rutas

// 5. Exportar módulos (fichero actual)
module.exports = app;