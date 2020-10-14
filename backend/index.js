// 1. MODO ESTRICTO (mejores prácticas de desarrollo con JS)
'use strict'
// 2. Se carga el módulo (dependencia) de mongoose:
var mongoose = require('mongoose');

// --- GENERAR app.js ANTES DE SEGUIR ---
// 6. cargar el archivo app
var app = require('./app');

//  7. Variable PORT el puerto que se va a utilizar
var port = 3900;

// 5. Desactivar metodos antiguos
mongoose.set('useFindAndModify', false);
// 4. Promesa para evitar fallos con la conexión MongoDB
mongoose.Promise = global.Promise;
// 3. Conexíón a MongoDB (mongod.exe tiene que estar corriendo).
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
	console.log('Conexión exitosa.');

	//  8. crear server y escuchar peticiones HTTP
	app.listen(port, () => {
		console.log('servidor corriendo en http://localhost:'+port);
	});
});