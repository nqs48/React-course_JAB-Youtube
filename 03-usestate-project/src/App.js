import "./App.css";
import { useState, useRef } from "react";

function App() {
  const numOne = useRef();
  const numTwo = useRef();

  const [nombre, setNombre] = useState("Nestor");
  const [resultado, setResultado] = useState("0");

  const sumar = (e) => {
    console.log(numOne);
    let res = parseInt(numOne.current.value) + parseInt(numTwo.current.value);
      setResultado(res);
  };
  const cambiarNombre = () => {
    if (nombre === "Nestea") setNombre("Nestor");
    if (nombre === "Nestor") setNombre("Nestea");
  };

  return (
    <div className="App">
      <h3>Hola mi nombre es: {nombre}</h3>
      <button onClick={cambiarNombre}>Click Me</button>
      <hr />
      <div>
        <input ref={numOne} type="number" />
        <span> + </span>
        <input ref={numTwo} type="number" />
        <span> = </span>
        <input type="text" readOnly value={resultado} />
        <br />
        <br />
        <button onClick={sumar}>Sumar</button>
      </div>
    </div>
  );
}

export default App;
