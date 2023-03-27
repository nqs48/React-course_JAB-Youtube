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
  
  const {isButton, data}= props
  const {nombre, color, url, vacasComidas, reinado}= data
  const vacasTotales= (vacasComidas*365)*reinado;
  
  const borrar= (e)=>{
    e.target.parentNode.remove();
  }


  return (
    <>
      <div ref={cardElement} className="card" style={{backgroundColor: color}}>
        <h2 style={{color: '#282c34'}}>{nombre.toUpperCase()}</h2>
        <img
            className="profile"
            src={url}
            alt=""
        />
        <h3>Ha comido <span style={{color: '#282c34'}}>{vacasTotales} vacas</span> en sus <span style={{color: '#282c34'}}>{reinado} años</span> de reinado.</h3>   
        {isButton? <button onClick={borrar}>Borrar</button> : null} 
      </div>
    
    </>
  )
}

/**
 * Propiedades por defecto
 */
CardComponent.defaultProps= {
  data: {
    nombre: "Rey Incognito",
    color:"gray",
    precio:0,
    vacasComidas: 0,
    reinado: 0,
    url: "https://www.html6.es/img/rey_incognito.png"
  },
  isButton: false
}

export default CardComponent