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

      <main>
        <section className="section-contactos"> 
          <h2>Contáctenos</h2>
          <div className="section-contactos-contenedor">
            <div>
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
              <div>
                <a href="">
                  <FacebookIcon/>
                </a>
                <a href="">
                  <TwitterIcon/>
                </a>
                <a href="">
                  <EmailIcon/>
                </a>
              </div>
            </div>
            <form>
              <label>Nombre:</label>
              <input></input>
              <label>Correo</label>
              <input></input>
              <label>Telefono</label>
              <input></input>
              <label>Mensaje</label>
              <textarea></textarea>
              <input type="submit" value="enviar" />
              <input type="submit" />
            </form>
            <div>
              <h2>Comentarios</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
