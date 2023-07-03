import "../estilos/Header.css";
import React, { useState } from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header>
      <div className="Contenedor-1">
        <h1 className="Contenedor-1-titulo">Your Restaurant</h1>
        <div className="Contenedor-1-informacion-local">
          <span className="contenedor-1-contacto"><LocalPhoneIcon/>999-999-999</span>
          <span className="Contenedor-1-direccion"><LocationOnIcon/>Urb Las Dunas 123 - Ica, Perú</span>
        </div>
      </div>
      <div className="Contenedor-2">
        <div className="Contenedor-2-mrs">
        <div className="menu-response" onClick={toggleMenu}>
        <MenuIcon fontSize="large"/>
        </div>
        <div className="redes-sociales">
            <FacebookIcon fontSize="medium"/>
            <TwitterIcon fontSize="medium"/>
            <EmailIcon fontSize="medium"/>
        </div>
        </div>
        <nav className={`Contenedor-2-enlaces ${menuOpen ? 'open' : ''}`}>
            <ul>
                <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
                <li><Link to="/Nosotros" onClick={closeMenu}>Nosotros</Link></li>
                <li><Link to="/Galeria" onClick={closeMenu}>Galeria</Link></li>
                <li><Link to="/Contacto" onClick={closeMenu}>Contacto</Link></li>
            </ul>
        </nav>
      </div>
    </header>
  );
}
