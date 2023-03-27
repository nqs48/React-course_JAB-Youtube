import React from "react";
import reyes from "../../database/dataReyes";
import CardComponent from '../Shared/CardComponent/CardComponent';

function ActividadOneComponent(){
  return (
    <>
      <div className= "container">
        {
          reyes.map( rey => (<CardComponent key={rey.nombre} data={rey} />))
        }
      </div>
    </>
  )

}


export default ActividadOneComponent