import React from 'react'
import {useRef} from 'react'

function CardComponent(props) {

  /**
   * Referencia de la Card para manipular sus estilos
   */
  const cardElement= useRef();

  /**
   * Desestructuracion del objeto con propiedades
   */
  const {rey, setValorTotal}= props
  const {nombre, color, precio, url}= rey

  /**
   * Metodo para comprar la carta y manipular su estilo
   */
  const comprar = ()=>{
    cardElement.current.style.display= "none";
    setValorTotal((total)=>total+precio); 
    
  }
  return (
    <>
      <div ref={cardElement} className="card" style={{backgroundColor: color}}>
        <h2>{nombre}</h2>
        <img
            className="profile"
            src={url}
            alt=""
        />
        <h3>Precio: ${precio}</h3>
        <button onClick={comprar}>Comprar</button>   
      </div>
    
    </>
  )
}

/**
 * Propiedades por defecto
 */
CardComponent.defaultProps= {
  nombre: "Rey Incognito",
  color:"gray",
  precio:0,
  url: "https://www.html6.es/img/rey_incognito.png"
}

export default CardComponent