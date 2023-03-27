import React from 'react';
import './App.css';
import './components/Shared/CardComponent/CardComponent.css';
import './components/Shared/InfoComponent/InfoComponent.css';
import ActividadOneComponent from './components/Actividades/ActividadOneComponent';
import ActividadTwoComponent from './components/Actividades/ActividadTwoComponent';
import ActividadThreeComponent from './components/Actividades/ActividadThreeComponent';
import ActividadFourComponent from './components/Actividades/ActividadFourComponent';

function App() {

  return (
    <> 
        <hr />
        <div>
          <h3 className="text-description">1. Recorrer la lista de objetos y renderizar cada elemento
           con la informacion necesaria. (map, default props) 
          </h3>
          <ActividadOneComponent />
        </div>
        <hr />
        <div>
          <h3>2. Recorrer la lista de objetos y realizar un filtrado de los elementos en cuyo nombre no 
            contenga la letra 'g', luego renderizar el componente con la informacion necesaria. Incluir un
            boton que al hacer click elimine el elemento renderizado (filter, map, events).
          </h3>
          <ActividadTwoComponent />
        </div>
        <hr />
        <div>
          <h3>3. Recorrer la lista de objetos y encontrar el primer elemento cuyo nombre inicie con la
            letra indicada en el formulario, si no encuentra ningun elemento, renderizar un mensaje que lo indique,
            y si lo encuentra renderizar el componente con la informacion necesaria.
            (find, map, conditional rendering, default props).
          </h3>
          
          <ActividadThreeComponent />
        </div>
         <hr />
        <div>
          <h3>4. Recorrer la lista de objetos y filtar los reyes que coman mas de 10 vacas diarias y ademas hayan reinado
            mas de 10 años  y renderizar cada elemento con la informacion necesaria. Luego crear un contador independiente
            para cada elemento renderizado (filter, map, conditional rendering, useState, events, default props).
          </h3>
          
          <ActividadFourComponent />
        </div>
        
    </>
  );
}

export default App;
