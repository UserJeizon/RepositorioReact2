import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Card from './Card';
import Informacion from './Informacion';


const App = () => {
return (
<BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={
            <>
                <h1>Bienvenido c:</h1>
                
            </>
        } />
        <Route path="/Login" element={<Login />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Informacion" element={<Informacion />} />
        

    </Routes>
</BrowserRouter>
);
};


export default App;