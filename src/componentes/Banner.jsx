

import "../estilos/Banner.css";
export function Banner(props) {
    const estiloImagen = {
        height: props.altura,
      };
return(
    <section className="banner">
    <img src={props.imagen} alt="" className="banner__img" style={estiloImagen}/>
    <div className="banner__content">{props.texto}</div>
</section>

)
}