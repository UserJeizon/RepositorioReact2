import React from 'react';
import { useState } from 'react'
import './App.css'



function App() {
  const [usuario, setusuario] = useState('')
  const [contraseña, setcontraseña] = useState('')
  const [logueado, setlogueado] = useState(false)

  function cambiarusuario(evento) {
    setusuario(evento.target.value)
  }

  function cambiarcontraseña(evento) {
    setcontraseña(evento.target.value)
  }
  async function ingresar () {

    const peticion =await fetch('http://localhost:4000/login?usuario='+ usuario + '&contrase%C3%B1a='  + contraseña)
    if(peticion.ok){
      setlogueado(true)
      alert('Usuario conectado')
    }else{
      alert('Usuario no registrado')
    }
    console.log('Logueado state:', logueado);
    if (logueado) {
      return <principal/>;
    }
   }
  
    return (
      <>
       <h1>Inicio de sesion</h1>
       <input placeholder=' ingrese su usuario'type="text" name='usuario'id='usuario' value={usuario} onChange={cambiarusuario}/>
       <input placeholder=' ingrese su usuario'type="password" name='contraseña'id='contraseña'value={contraseña}onChange={cambiarcontraseña} />
       <button onClick={ingresar}>ingresar</button>
  
      </>
    )
  
  }

export default App;