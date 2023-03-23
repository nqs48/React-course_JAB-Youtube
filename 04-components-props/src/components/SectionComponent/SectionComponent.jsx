import React from 'react'

/**
 * Componmente funcional de React
 * @param {*} param0 : Desestructuracion implicita de datos enviados dedesde el componente padre
 * @returns 
 */
function SectionComponent({rey,aficion,estado}) {

  return (
    <>
      <h2>El Rey {rey}, disfruta {aficion} y se encuenta {estado}</h2>
    </>
  )
}

/**
 * Definicion de propiedades por defecto, tomara el valor definido,
 * si la propiedad no es enviada desde el componente padre.
 */
SectionComponent.defaultProps= {
  rey: "Incognito",
  aficion: "todo",
  estado: "vivo"
}

export default SectionComponent