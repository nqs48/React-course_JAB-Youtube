import React from 'react';
import reyes from "../../database/dataReyes";
import CardComponent from '../Shared/CardComponent/CardComponent';


function ActividadFourComponent(){

  const filterKings= reyes.filter(r => (r.vacasComidas > 10 && r.reinado > 10));
  console.log(filterKings)

  return (
    <>
      <div className="container">
        {
          filterKings.map(rey => <CardComponent key={rey.nombre} isCount={true} isDescription={false} data={rey} />)
        }
      </div>
    </>
  )
}


export default ActividadFourComponent