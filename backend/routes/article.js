// 1. use strict
'use strict'

// 2. Cargamos express
var express = require('express');

// 3. Cargamos el controlador
var ArticleController = require('../controllers/article');

// 4. Llamamos al router de express
var router = express.Router();

// 7. Desde el controller, al configurar la subida de archivos. Se carga el módulo de multiparty
var multipart = require('connect-multiparty');
// 7.1 se crea una variable que carga un middelware de multiparty. Es una funcionalidad que se ejecuta antes de que se ejecute el método del controlador que está asignado a la ruta.
// 7.1.1 uploadDir toma una dirección donde guardar los archivos (imágenes en este caso) y luego se debe crear la carpeta.
// 7.1.2 Se aplica el middleware a una ruta (más abajo), como segundo parámetro.
var md_upload = multipart({ uploadDir: './upload/articles'});

// 5. Creamos las rutas: router + metodoHttp ('nombre de la ruta', OBJETO.metodo )
// Rutas de prueba
router.post('/testxpost', ArticleController.datosCurso);
router.get('/testxget', ArticleController.test);

// Rutas útiles
// Guardar el artículo
router.post('/save', ArticleController.save);
// Ver los artículos. Valor opcional para ver los ultimos 5
router.get('/articles/:last?', ArticleController.getArticles);
// Ver un artículo ID obligatorio
router.get('/article/:id', ArticleController.getArticle);
// Actualizar un artículo
router.put('/article/:id', ArticleController.update);
// Eliminar un artículo
router.delete('/article/:id', ArticleController.delete);
// Subida de archivos en este caso, imágenes para el artículo [EDIT= agregamos el ? para que el id sea un parametro opcional]
router.post('/upload-image/:id?', md_upload, ArticleController.upload);
// Obtener la imagen
router.get('/get-image/:image', ArticleController.getImage);
// Buscador
router.get('/search/:search', ArticleController.search);


// 6. Exportar
module.exports = router;

// Y nos vamos al app JS