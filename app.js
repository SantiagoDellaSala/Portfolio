const express = require("express"); // Requerimos express (Para crear aplicación web híbrida)
const app = express(); // Guardamos la ejecución de express en una variable
const PORT = 3000; // Guardamos el puerto en una variable
const path = require("path"); //Requerimos el módulo path (Para juntar partes de una ruta)
const mainRouter = require('./routers/main.routes.js'); /* Requerimos el módulo propio 
que nos trae las peticiones a las rutas*/
const { about } = require("./controllers/mainControllers.js");

//Usamos el método use y static para hacer uso de los recursos y estilos
app.use(express.static(path.join(__dirname, 'public'))); 

/* Hacemos petición al servidor y usamos como respuesta las rutas que traemos del 
módulo mainRouter */
app.get("/", mainRouter);
app.get("/about", about);

//Ponemos el servidor en el modo escucha
app.listen(PORT, () =>console.log(`Server running in: https://localhost:${PORT}`));
