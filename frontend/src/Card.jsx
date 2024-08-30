import React from "react";
import imagen from './assets/Perfecto.jpg'
import './Card.css';

function Card(){
    return(
        <div className="card">
            <img className="card-imagen" src={imagen} alt="Imagen"></img>
            <h2>Tienda virtual</h2>
            <p>Una pagina en la que encontrarás <br />los componentes que necesitas <br />de tus marcas preferidas c:</p>
        </div>
    );
}

export default Card;
