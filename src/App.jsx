import { useState } from 'react';
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='monedas'>

      </div>
      <div className='tiradas'>

      </div>
      <div className='plafon'>
        <div className='ruleta' style={{
          backgroundImage:`url('./assets/ruleta.png')`
        }}>

        </div>
        <div className='premio'>

        </div>
        <div className='barra1'>
          <div className='mi_barra'></div>
        </div>
        <div className='barra-inferior'>
          <button className='lanzar'>Lanzar</button>
        </div>
        <div className='central'>
          <img src="./assets/central.png" alt="central" />
        </div>

      </div>
     
    </div>
  )
}

export default App;
