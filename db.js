import mongoose, { Mongoose } from "mongoose";

const DB_URI='mongodb://localhost:27017/clientes';

mongoose.connect(DB_URI)
.then(()=>{
    console.log('Conectado a la base de datos')
})
.catch((err)=>{
    console.error('Error al conectar la base de datos')
})

// Consulta

const usuariosShema= new mongoose.Schema({
    Nombre: {type : String, required: true},
    Email: {type : String, required: true},
    Edad: {type : String, required: true},
});

const usuarios = mongoose.model('usuario',usuariosShema);
usuarios.find() 
.then ((usuarios)=>{
    console.log('usuarios encontrados',usuarios)
})
.catch ((err)=>{
    console.error('Error de consulta',err)
})