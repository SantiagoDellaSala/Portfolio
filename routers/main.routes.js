const express = require ('express');//Requerimos express
const router = express.Router();/* Guardamos el método de express Router ejecutado */
const mainControlador = require('../controllers/mainControllers.js');/* Requerimos el 
módulo propio creado en la carpeta controllers */

/* Ahora enviamos las respuestas que generamos en el archivo mainController.js a nuestro
archivo app.js */

/* / */
router.get('/', mainControlador.home);

/* /about */
router.get('/about', mainControlador.about);

module.exports = router; //Exportamos el módulo para recibirlo en app.js