import './App.css'
import { useState } from 'react'
import CardComponent from './components/CardComponent/CardComponent'
import './components/CardComponent/CardComponent.css'
import { reyes } from './data/ReyesData'

function App() {
  
  /**
   * constante para actaualizar el estado del valor total
   */
  const [valorTotal, setValorTotal] = useState(0)

  return (
    <>
      <div>
        <h1 className='total-container'>Total: ${valorTotal}</h1>
        <div className="container">
          <CardComponent
            setValorTotal={setValorTotal}
            rey={reyes[0]}
          />
          <CardComponent
            setValorTotal={setValorTotal}
            rey={reyes[1]}
          />
          <CardComponent
            setValorTotal={setValorTotal}
            rey={reyes[2]}
          />
          <CardComponent
            setValorTotal={setValorTotal}
            rey={reyes[3]}
          />
          <CardComponent
            setValorTotal={setValorTotal}
            rey={reyes[4]}
          />
          <CardComponent
            setValorTotal={setValorTotal}
            rey={reyes[5]}
          />
        </div>
      </div>
    </>
  )
}

export default App
