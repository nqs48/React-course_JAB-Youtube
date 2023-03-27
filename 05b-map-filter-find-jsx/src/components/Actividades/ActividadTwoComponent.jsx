import React from "react";
import reyes from "../../database/dataReyes";
import CardComponent from '../Shared/CardComponent/CardComponent';


function ActividadTwoComponent(){

const reyesFilter= reyes.filter(r => !r.nombre.includes('g'))

  return (
    <>
      <div className= "container">
        {
          reyesFilter.map(rey => (<CardComponent key={rey.nombre} data={rey} isButton={true} />) )
        }
      </div>  
    </>
  )
}


export default ActividadTwoComponent
