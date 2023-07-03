import { Routes, Route } from 'react-router-dom';
import { Inicio } from './Inicio';
import { Nosotros } from './Nosotros';
import { Galeria } from './Galeria';
import { Contacto } from './Contacto';

export function Paginas(){
    return (
        <div>
          <Routes>
            <Route exact path="/" element={<Inicio/>} />
            <Route path="/Nosotros" element={<Nosotros/>} />
            <Route path="/Galeria" element={<Galeria/>} />
            <Route path="/Contacto" element={<Contacto/>} />
          </Routes>
        </div>
      );
}