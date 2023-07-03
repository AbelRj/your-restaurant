import '../../estilos/Nosotros.css';
import LazyLoad from 'react-lazyload';
import React, { useEffect, useState } from 'react';
import BannerNosotros from '../../imagenes/banner-about.jpg';
import { Banner } from '../Banner';
import chef1 from '../../imagenes/chef1.jpg';
import chef2 from '../../imagenes/chef2.jpg';
import chef3 from '../../imagenes/chef3.jpg';
export function Nosotros() {
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
        <Banner imagen={BannerNosotros} altura={200} />
        </LazyLoad>
      )}
         <main >
            <section className='sobre-nosotros'>
                <div className='sobre-nosotros-contenedor'>
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusamus natus, vel sit, officiis nemo eos, doloremque doloribus quas nam quisquam necessitatibus rerum distinctio odio consequuntur voluptatem quibusdam ab labore. 
                    </p>
                </div>
            </section>

            <section className='nuestro-equipo'>
                <h2 >nuestro equipo</h2>
                <div  className='nuestro-equipo-contenedor'>
                    <div className='nuestro-equipo-chef'>
                        <h3 className='nuestro-equipo-chef-nombre'>Yban</h3>
                        <LazyLoad>
                        <img className='nuestro-equipo-chef-imagen' src={chef1} alt="" />
                        </LazyLoad>
                        <p className='nuestro-equipo-chef-descripcion'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti vel voluptatem impedit! Ipsam numquam libero quod illum quisquam obcaecati eveniet porro cum repudiandae. Ipsum suscipit sapiente nobis! Maxime, amet!</p>
                    </div>
                    <div className='nuestro-equipo-chef'>
                        <h3 className='nuestro-equipo-chef-nombre'>Anthony</h3>
                        <LazyLoad>
                        <img className='nuestro-equipo-chef-imagen'  src={chef2} alt="" />
                        </LazyLoad>
                        <p className='nuestro-equipo-chef-descripcion'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum in facere est aliquam, itaque amet, vitae illum aperiam corporis omnis molestias et consequatur commodi blanditiis maxime cumque. Hic, consectetur eum.</p>
                    </div>
                    <div className='nuestro-equipo-chef'>
                        <h3 className='nuestro-equipo-chef-nombre'>Roberto</h3>
                        <LazyLoad>
                        <img className='nuestro-equipo-chef-imagen'  src={chef3} alt="" />
                        </LazyLoad>
                        <p className='nuestro-equipo-chef-descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo fuga ipsam, officia tempore et est magni ducimus voluptatibus repellendus fugit consequatur, voluptas iste perferendis animi suscipit optio labore quae!</p>
                    </div>
                </div>
            </section>
        </main>
        </>
        )
       
}