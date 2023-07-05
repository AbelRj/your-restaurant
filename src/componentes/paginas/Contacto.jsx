import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';

import BannerContacto from "../../imagenes/banner-contact.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import '../../estilos/Contacto.css';
import { Banner } from "../Banner";
export function Contacto() {
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Cambiar el valor inicial a false

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 480);
    };

    window.addEventListener('resize', handleResize);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? null : (
        <LazyLoad>
        <Banner imagen={BannerContacto} altura={200} />
        </LazyLoad>
      )}

      <main className='main-contacto'>
        <section className="section-contactos"> 
          <h2>Contáctenos</h2>
          <div className="section-contactos-contenedor">
            <div className='section-contactos-contenedor-1'>
              <h3>Información de contacto</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                consectetur numquam voluptas adipisci hic rerum accusamus et
                dolor quod, rem natus ven.
              </p>
              <p>
                <span></span>Teléfono 1: 999-999-999
              </p>
              <p>
                <span></span>Teléfono 2: 555-555-555
              </p>
              <p>
                <span></span>Urb Las Dunas 123 - Ica, Perú
              </p>
              <p>
                <span></span>consultas@yourrestaurant.com
              </p>
              <div className='contacto-redes-sociales'>
                <a href="" className='contacto-red-social'>
                  <FacebookIcon />
                </a>
                <a href="" className='contacto-red-social'>
                  <TwitterIcon/>
                </a>
                <a href="" className='contacto-red-social'>
                  <EmailIcon/>
                </a>
              </div>
            </div>
            <form className='formulario'>
              <label className='formulario__label'>Nombre:</label>
              <input className='formulario__input-txt'/>
              <label  className='formulario__label'>Correo</label>
              <input  className='formulario__input-txt'/>
              <label  className='formulario__label'>Telefono</label>
              <input className='formulario__input-txt'/>
              <label  className='formulario__label'>Mensaje</label>
              <textarea className="formulario__textarea" />
              <input type="submit" className='formulario__btn' value="enviar" />
            </form>
            
          </div>
        </section>
      </main>
    </>
  );
}
