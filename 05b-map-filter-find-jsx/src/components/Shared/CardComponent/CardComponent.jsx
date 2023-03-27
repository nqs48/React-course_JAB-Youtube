import React, {useRef, useState} from 'react'

function CardComponent(props) {

  /**
   * Referencia de la Card para manipular sus estilos
   */
  const cardElement= useRef();

  /**
   * Desestructuracion del objeto con propiedades
   */
  
  const {isButton, isCount, isDescription, data}= props
  const {nombre, color, url, vacasComidas, reinado}= data
  const vacasTotales= (vacasComidas*365)*reinado;
  const [conteo, setConteo]= useState(0)
  
  const borrar= (e)=>{
    e.target.parentNode.remove();
  }

  const votar= ()=>{
    setConteo(conteo+1);
  }

  const limpiar= ()=>{
    setConteo(0);
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
        {isDescription? <h3>Ha comido <span style={{color: '#282c34'}}>{vacasTotales} vacas</span> en sus <span style={{color: '#282c34'}}>{reinado} años</span> de reinado.</h3> : null}  
        {isButton? <button onClick={borrar}>Borrar</button> : null}
        {isCount? 
          <div>
            <h2>{conteo}</h2>
            <div>
              <button onClick={votar}>Votar</button>
              <button onClick={limpiar}>Limpiar</button>
            </div>  
          </div> 
        : null}
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
  isButton: false,
  isCount: false,
  isDescription: true
}

export default CardComponent