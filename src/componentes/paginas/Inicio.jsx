import '../../estilos/Inicio.css';
import LazyLoad from 'react-lazyload';
import food1 from '../../imagenes/food1.jpg';
import plato1 from '../../imagenes/plate1.jpg';
import plato2 from '../../imagenes/plate2.jpg';
import plato3 from '../../imagenes/plate3.jpg';
import plato4 from '../../imagenes/plate4.jpg';
import BannerInicio from '../../imagenes/banner.jpg';
import { Banner } from '../Banner';
export  function Inicio() {
    return(
        <>
        <LazyLoad>
        <Banner imagen={BannerInicio}
        texto="La mejor y exquisita comida está aqui"
       />
       </LazyLoad>
        <main>
             <section className="section-bienvenido">
                <div className='section-bienvenido-info'>
                    <h2>Bienvenido a su restaurante</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusamus natus, vel sit, officiis nemo eos, doloremque doloribus quas nam quisquam necessitatibus rerum distinctio odio consequuntur voluptatem quibusdam ab labore. 
                    </p>
                </div>
            </section>
            <section className='section-industria'>
                <div className='section-industria-info'>
                    <div className='section-industria-info-imagen'>
                        <LazyLoad>
                        <img src={food1} alt=""/>
                        </LazyLoad>
                    </div>
                    <div className='section-industria-info-texto'>
                        <h3 >Expertise In Industrial Solution</h3>
                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, error aspernatur. Optio deleniti pariatur eveniet laborum totam nostrum sint quidem eaque earum distinctio doloremque consectetur accusamus nesciunt facere, at ipsa?</p>
                        <a href="" >Contact</a>
                    </div>
                </div>
            </section>
            <section className='section-especialidad-de-hoy'>
                <h2 className='section-especialidad-de-hoy-titulo'>Especial de hoy</h2>
                <div className='section-especialidad-de-hoy-platos'>
                    <div>
                        <LazyLoad>
                        <img src={plato1} alt="" className='section-especialidad-de-hoy-imagen'/>
                        </LazyLoad>
                        <div className='section-especialidad-de-hoy-nombre-de-plato'>Especial del Dia 1</div>
                        <div  className='section-especialidad-de-hoy-precio-de-plato'>$99</div>
                    </div>
                    <div ><LazyLoad>
                        <img src={plato2} alt="" className='section-especialidad-de-hoy-imagen'/>
                        </LazyLoad>
                        <div className='section-especialidad-de-hoy-nombre-de-plato'>Especial del Dia 2</div>
                        <div  className='section-especialidad-de-hoy-precio-de-plato'>$99</div>
                    </div>
                    <div ><LazyLoad>
                        <img src={plato3} alt="" className='section-especialidad-de-hoy-imagen'/>
                        </LazyLoad>
                        <div className='section-especialidad-de-hoy-nombre-de-plato'>Especial del Dia 3</div>
                        <div className='section-especialidad-de-hoy-precio-de-plato'>$99</div>
                    </div>
                    <div ><LazyLoad>
                        <img src={plato4} alt="" className='section-especialidad-de-hoy-imagen'/>
                        </LazyLoad>
                        <div className='section-especialidad-de-hoy-nombre-de-plato'>Especial del Dia 4</div>
                        <div  className='section-especialidad-de-hoy-precio-de-plato'>$99</div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}