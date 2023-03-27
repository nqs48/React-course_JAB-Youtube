import React, { useState} from "react";
import reyes from "../../database/dataReyes";
import CardComponent from '../Shared/CardComponent/CardComponent';
import InfoComponent from '../Shared/InfoComponent/InfoComponent';


function ActividadThreeComponent(){

  const [char, setChar]= useState("");

  const texto= `No hay elemento cuyo nombre empiece por '${char.toUpperCase()}' o '${char.toLowerCase()}'`;


  let findKing= (char !== '')? reyes.find(r => r.nombre.startsWith(char.toUpperCase()) || r.nombre.startsWith(char.toLowerCase())) : null;

  const filtar= (e)=>{
    setChar(e.target.value)
  }

  return (
    <>
      <div>
        <label className="label-filter" htmlFor= "filter">Inicia Con:</label>
        <input type="text" className="input-filter" id= "filter" onChange={filtar} value={char} placeholder="Letra" />
      </div>
      <div className="container">
        { 
        (findKing != null)? <CardComponent data={findKing}/> : <InfoComponent info={texto}/>
        }
      </div>
      
    </>
  )
}

export default ActividadThreeComponent
