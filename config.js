import { createConnection } from "mysql";

const db = createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'usuarios'
});

db.connect((err)=> {
    if (err){
        console.error('Error de la conexión a la base de datos:',err)
        return
    }
    console.log('Conectado a la base de datos')
    
})

// Consulta de datos

db.query('SELECT * FROM datos',(err, rows) =>{
    if (err){
    console.error('Error de consulta de datos:',err)
    return
    }
    console.log('Resultado de la consulta:')
    console.log(rows)
})