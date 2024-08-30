import express from "express"
import mysql from 'mysql2/promise';
import cors from 'cors';


// Creando servidor 
const app = express()
app.use(cors());
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'adsoreact',
});

// Consulta basica 
app.get('/',(req,res)=> res.send("Esto funciona"))

app.get('/login',async (req,res)=> {
  const datos = req.query

  try {
    const [results, fields] = await pool.query(
      "SELECT * FROM `usuarios` WHERE `correo` = ? AND `contraseña`= ? ",
      [datos.usuario, datos.contraseña]
      
    );
    if(results.length > 0) {
      res.status(200).send('Inicio de sesion correctos')
    } else{
      res.status(401).send('Error de inicio')
    }

    console.log(results); 
    console.log(fields); 
  } catch (err) {
    console.log(err);
  }

  console.log(datos)
  
})

   app.get('/validar',(req,res)=>{
    res.send('Sesion valida')

   })


// ruta de local
app.listen(4000)
console.log("servidor en el puerto ", 4000)

//configuracion para las imagenes y estilos 
app.use(express.static('public'));

