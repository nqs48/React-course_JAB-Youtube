import React from 'react'
import './BannerComponent.css'
import reyes from '../../data/ReyesData' 


function BannerComponent(props) {

  /**
   * Desestructuracion de objeto a constante
   */
  const {nombre, curso, plataforma}= props;

  return (
    <div>
      <h3>Hola soy <span>{nombre}</span> y estoy aprendiendo <span>{curso}</span> desde la plataforma <span>{plataforma}</span></h3>

      <div>
        <span>{reyes[0].nombre}</span>
      </div>

    </div>
  )
}

/**
 * Definicion de default props
 */
BannerComponent.defaultProps = {
  nombre: "Capitan Incognito",
  curso: "lucha con espada",
  plataforma: "Platzi Medieval"
}

export default BannerComponent