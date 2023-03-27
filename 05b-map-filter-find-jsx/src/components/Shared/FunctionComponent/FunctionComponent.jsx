import React from 'react';
import { reyes } from "../../../database/dataReyes";

function FunctionComponent(){

  console.log(reyes)
  const reyesParaDesintoxicacion = reyes.filter(rey => rey.vacasComidas > 10).map(rf => <h2 key={rf.nombre} >{rf.nombre} - {rf.vacasComidas} vacas/dia </h2>);

  return (
   <>
      <div>{reyes.filter(rey => rey.vacasComidas > 10)
        .map(rf => 
            (<h2 key={rf.nombre} >{rf.nombre} - {rf.vacasComidas} vacas/dia </h2>)
        )}
      </div>
      
      <div style={{color: "goldenrod"}} >
          {reyesParaDesintoxicacion}
      </div>
    </>
  )
}


export default FunctionComponent