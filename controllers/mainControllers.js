//Requerimos el módulo path
const path = require('path');

//Exportamos directamente el objeto y así poder usar sus propiedades
module.exports = {
    
    //Creamos las respuestas a las peticiones que hicimos en el archivo app.js
    home : (req, res) =>
    res.sendFile(path.join(__dirname, "..", "views", "home.html")),
    about : (req, res) =>
    res.sendFile(path.join(__dirname, "..", "views", "about.html")),
};