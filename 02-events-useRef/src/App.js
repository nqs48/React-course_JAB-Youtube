import img01 from "./assets/images/rey_atanagildo.png";
import img02 from "./assets/images/rey_ataulfo.png";

import { useRef } from "react";
import "./App.css";

function App() {
  const refCaja = useRef();
  const refInput = useRef();
  const refImg = useRef();

  const valorCambio = 23.16;

  function mapeo() {
    refCaja.current.innerHTML = refInput.current.value;
  }

  function conteo(e) {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (e.target.innerHTML >= 8) {
      e.target.style.backgroundColor = "red";
    }
    if (e.target.innerHTML > 9){
      e.target.innerHTML = 0;
      e.target.style.backgroundColor = "";
    }
  }

  function convertir() {
    refCaja.current.innerHTML =
      parseInt(refCaja.current.innerHTML) * valorCambio;
  }

  function cambiarImagen() {
    if (refImg.current.src.includes(img02)) {
      refImg.current.src = img01;
    } else if (refImg.current.src.includes(img01)) {
      refImg.current.src = img02;
    }
  }

  return (
    <>
      <div ref={refCaja} onClick={conteo} className="container">
        0
      </div>
      <button onClick={convertir}>Aceptar</button>
      <div onClick={cambiarImagen}>
        <img ref={refImg} src={img01} alt="" />
      </div>
      <input ref={refInput} onChange={mapeo} className="campo" type="text" />
    </>
  );
}

export default App;
