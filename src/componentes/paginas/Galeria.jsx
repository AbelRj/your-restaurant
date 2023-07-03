import '../../estilos/Galeria.css';

import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import BannerGaleria from '../../imagenes/banner-gallery.jpg';
import { Banner } from '../Banner';
import imagenGaleria1 from '../../imagenes/galeria/gallery1.jpg';
import imagenGaleria2 from '../../imagenes/galeria/gallery2.jpg';
import imagenGaleria3 from '../../imagenes/galeria/gallery3.jpg';
import imagenGaleria4 from '../../imagenes/galeria/gallery4.jpg';
import imagenGaleria5 from '../../imagenes/galeria/gallery5.jpg';
import imagenGaleria6 from '../../imagenes/galeria/gallery6.jpg';
import imagenGaleria7 from '../../imagenes/galeria/gallery7.jpg';
import imagenGaleria8 from '../../imagenes/galeria/gallery8.jpg';
export function Galeria() {
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
        <Banner imagen={BannerGaleria} altura={200} />
        </LazyLoad>
      )}
   

      <main>
        <section className='section-galeria'>
                <h2  className='section-galeria-titulo'>Nuestra Galería</h2>
                <div className='section-galeria-contenedor'>
                    <div  className='section-galeria-contenedor-fila' >
                          <LazyLoad>      
                        <img src={imagenGaleria1} alt="" className='galeria-imagen-grande'/>
                        </LazyLoad>
                        <LazyLoad>
                        <img src={imagenGaleria2} alt="" className='galeria-imagen-chica'/>
                        </LazyLoad>
                    </div>
                    <div className='section-galeria-contenedor-fila' >
                        <LazyLoad>
                        <img src={imagenGaleria3} alt="" className='galeria-imagen-chica'/>
                        </LazyLoad>
                        <LazyLoad>
                        <img src={imagenGaleria4} alt="" className='galeria-imagen-grande'/>
                        </LazyLoad>
                    </div>
                    <div  className='section-galeria-contenedor-fila' >
                        <LazyLoad>
                        <img src={imagenGaleria5} alt="" className='galeria-imagen-grande'/>
                        </LazyLoad>
                        <LazyLoad>
                        <img src={imagenGaleria6} alt="" className='galeria-imagen-chica'/>
                        </LazyLoad>
                    </div>
                    <div className='section-galeria-contenedor-fila'>
                        <LazyLoad>
                        <img src={imagenGaleria7} alt="" className='galeria-imagen-grande'/>
                        </LazyLoad>
                        <LazyLoad>
                        <img src={imagenGaleria8} alt="" className='galeria-imagen-chica'/>
                        </LazyLoad>
                    </div>
                </div>
        </section>
      </main>
        </>
        )
       
}