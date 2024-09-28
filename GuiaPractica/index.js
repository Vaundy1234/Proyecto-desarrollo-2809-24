//Importar todas las librerias necesarias.
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const low = require("lowdb");

//Determinamos el puento en EndPoint
const PORT = process.env.PORT || 10801;

//Obtenemos la libreria controlador del Archivo
const FileSiync = require("lowdb/adapters/fileSync");

//Creamos el archivo db.jason
const adapter = new FileSiync("db.jason");
const db = low(adapter);
//Inicializamos la BD
db.defaults({ articulos: []}).write();

const app = express(); //Creamos el aplicativo

app.db = db; //Definimos el DB

//Definimos las variables necesarias.
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Mostramos el log de jecucion del servidor
app.listen(PORT, () => console.log(`El servidor esta corriendo en el puente ${PORT}`));
