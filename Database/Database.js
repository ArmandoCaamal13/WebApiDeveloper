const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "Nombre-de-la-bd"
})

db.connect((error) => {
    if(error){
        console.log("Error al conectar la base de datos", error);
    }else{
        console.log('conexion exitosa');
    }
})

module.exports = db;