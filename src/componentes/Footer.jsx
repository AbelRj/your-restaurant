import '../estilos/Footer.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
export function Footer() {
    return(
        <footer >
        <div className='contenedor-footer'>
            <div className='contenedor-footer-columna' >
                <h2 >¿Por qué visitarnosr?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat accusamus at, laudantium hic quia laboriosam inventore laborum, esse nulla illo aut veritatis, autem molestiae.</p>
            </div>
            <div className='contenedor-footer-columna' >
                <h2 >Contáctanos</h2>
                <p >Urb Las Dunas 123 - Ica, Perú</p>
                <p >Teléfono: 999-999-999</p>
                <p >consultas@yourrestaurant.com</p>
            </div>
            <div className='contenedor-footer-columna' > 
                <h2>Siguenos en nuestras redes</h2>
                <p className='contenedor-icon-footer'><FacebookIcon/><a href="" >Facebook</a></p>
                <p className='contenedor-icon-footer'><TwitterIcon/><a href="" >Siguenos en twitter</a></p>
                <p className='contenedor-icon-footer'><YouTubeIcon/><a href="" >Visita nuestro canal</a></p>
            </div>
            
        </div>
        <p className="copy">2018 Your Restaurant | Todos los derechos reservados</p>
    </footer>
    )

}