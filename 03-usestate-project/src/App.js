import './App.css'
import { reyesGodos } from './data/reyesGodos'
import { useState, useRef } from 'react'

function App() {
  /**
   * Ejercicio 1: Constante useState para actualizar el nombre.
   */
  const [nombre, setNombre] = useState('Nestor')

  /**
   * Ejercicio 2: Constante useState para actualizar el contador.
   */
  const [contador, setContador] = useState(0)

  /**
   * Ejercicio 3: Constantes useRef y useState para obtener la referencia del elemento HTML y actualizar los valores.
   */
  const numOne = useRef()
  const numTwo = useRef()
  const [resultado, setResultado] = useState(0)

  /**
   * Ejercicio 4: Constantes useState para actualizar los valores.
   */
  const [cont, setCont] = useState(0)
  const [rey, setRey] = useState(reyesGodos[0].nombre)
  const [aficion, setAficion] = useState(reyesGodos[0].aficion)

  /**
   * Ejercicio 5: Constantes useRef para obtener las referencias del los inputs.
   */
  const htmlPA = useRef()
  const htmlPC = useRef()
  const htmlPM = useRef()
  const htmlDl = useRef()

  /**
   * Ejercicio 5: Constante useState para actualizar el valor de cada moneda.
   */
  const [valorPA, setValorPA] = useState(0)
  const [valorPC, setValorPC] = useState(0)
  const [valorPM, setValorPM] = useState(0)
  const [valorDl, setValorDl] = useState(0)

  /**
   * Ejercicio 1: Metodo para alternar y actualizar el nombre.
   */
  const cambiarNombre = () => {
    if (nombre === 'Nestea') setNombre('Nestor')
    if (nombre === 'Nestor') setNombre('Nestea')
  }

  /**
   * Ejercicio 2: Metodo para aumentar un numero.
   */
  const aumentar = () => {
    setContador(contador + 1)
  }

  /**
   * Ejercicio 2: Metodo para disminuir un numero.
   */
  const disminuir = () => {
    setContador(contador - 1)
  }

  /**
   * Ejercicio 2 y 3: Limpia los espacios del ejercicio calculadora y ademas reinicia el contador del ejercicio sumador/restador.
   * @param {*} e Datos predeterminados que devuelve el evento.
   * @returns
   */
  const reiniciar = (e) => {
    if (e.target.innerHTML === 'Limpiar') {
      numOne.current.value = ''
      numTwo.current.value = ''
      setResultado(0)
      return
    }
    setContador(0)
  }

  /**
   * Ejercicio 3: Metodo que suma obteniendo los valores por referencia del elemento HTML.
   */
  const sumar = () => {
    let res = parseInt(numOne.current.value) + parseInt(numTwo.current.value)
    setResultado(res)
  }

  /**
   * Ejercicio 4: Metodo que renderiza la frase y cambia los valores de nombre y aficion de acuerdo a la lista de objetos.
   * @param {*} e Datos predeterminados que devuelve el evento.
   */
  const informacion = (e) => {
    e.target.parentNode.childNodes[1].style.opacity = 1
    setRey(reyesGodos[cont].nombre)
    setAficion(reyesGodos[cont].aficion)
    setCont(cont + 1)
    if (cont + 1 > 2) setCont(0)
  }

  /**
   * Metodo que calcula el valor de la moneda por pais
   */
  const calcularMoneda = (e) => {
    console.log('Vamos a calcular, valor: ', e.target.value)
    console.log(htmlPA)
    setValorPA((Number(e.target.value) * 223.27).toFixed(1))
    setValorPC((Number(e.target.value) * 5195.21).toFixed(1))
    setValorPM((Number(e.target.value) * 20.19).toFixed(1))
    setValorDl((Number(e.target.value) * 1.09).toFixed(1))
  }

  return (
    <div className="App">
      <div className="container">
        <h3>Hola mi nombre es: {nombre}</h3>
        <button className="button" onClick={cambiarNombre}>
          Click Me
        </button>
      </div>
      <hr />
      <div className="container">
        <h1 style={{color:'white'}}>{contador}</h1>
        <button className="button" onClick={disminuir}>
          Anterior
        </button>
        <button className="button" onClick={reiniciar}>
          Reiniciar
        </button>
        <button className="button" onClick={aumentar}>
          Siguiente
        </button>
      </div>
      <hr />
      <div className="container">
        <input className="box" ref={numOne} type="number" />
        <span className="operators"> + </span>
        <input className="box" ref={numTwo} type="number" />
        <span className="operators"> = </span>
        <input className="box answer" type="text" readOnly value={resultado} />
        <br />
        <button className="button" onClick={sumar}>
          Sumar
        </button>
        <button className="button" onClick={reiniciar}>
          Limpiar
        </button>
      </div>
      <hr />
      <div className="container">
        <button className="button" onClick={informacion}>
          Continuar
        </button>
        <div className="informacion">
          <h2>
            La aficion principal de <span className="kingName">{rey}</span> es{' '}
            <span className="kingHoobie">{aficion}</span>.
          </h2>
        </div>
      </div>
      <hr />

      <div className="container">
        <div>
          <label className="label-divisa" htmlFor="eu">
            Euro
          </label>
          <input
            style={{backgroundColor:'black',color:'white'}}
            onChange={calcularMoneda}
            className="input-divisa"
            id="eu"
            type="number"
          />
        </div>

        <div className="subcont-divisa">
          <div>
            <label className="label-divisa" htmlFor="pa">
              Peso Argentino
            </label>
            <input
              ref={htmlPA}
              className="input-divisa"
              id="pa"
              type="number"
              readOnly
              value={valorPA}
            />
          </div>

          <div>
            <label className="label-divisa" htmlFor="pc">
              Peso Colombiano
            </label>
            <input
              ref={htmlPC}
              className="input-divisa"
              id="pc"
              type="text"
              readOnly
              value={valorPC}
            />
          </div>

          <div>
            <label className="label-divisa" htmlFor="pm">
              Peso Mexicano
            </label>
            <input
              ref={htmlPM}
              className="input-divisa"
              id="pm"
              type="text"
              readOnly
              value={valorPM}
            />
          </div>

          <div>
            <label className="label-divisa" htmlFor="dl">
              Dolar
            </label>
            <input
              ref={htmlDl}
              className="input-divisa"
              id="dl"
              type="text"
              readOnly
              value={valorDl}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
