import { useRef, useState } from 'react';
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {

  const [ancho, setAncho] = useState(1);
  const [dinero, setDinero] = useState(1);
  const [tiradas, setTiradas] = useState(1);

  const [premio, setPremio] = useState('haz click en lanzar')
  const [rotation, setRotation] = useState(0);

  const [situacion, setSituacion] = useState(0)

  const barraRef = useRef(null);



  const lanzar = () => {
    if (barraRef.current) {
      setTiradas(tiradas - 1)
      barraRef.current.classList.toggle('parate')
      const width2 = barraRef.current.getBoundingClientRect().width;
      setAncho(width2);
      girar();
      setSituacion(1);
    }
  }

  const girar = () => {
    const nuevaRotacion = Math.floor(Math.random() * 210) + 340;
    setPremio("...suerte...")
    setRotation(rotation + ancho + nuevaRotacion);
  }

  const final = () => {
    setSituacion(0)
    // barraRef.current.classList.toggle('parate');
    const grados = (rotation % 360 + 360) % 360;
    if (grados >= 0 && grados <= 44 || grados >= 180 && grados <= 224) {
      //la casilla muerte
      setPremio('la casilla muerte')
      setDinero(0)
      setSituacion(2)
    } else if (grados >= 45 && grados <= 90) {
      //ganas una moneda y sigues jugando
      setPremio('ganas una moneda y sigues jugando')
      setDinero(dinero + 1)
      setTiradas(tiradas + 1)
    } else if (grados >= 91 && grados <= 135) {
      //doblas x2 y  ganas ___ monedas
      setPremio(`doblas x2 y  ganas ${dinero * 2} monedas`)
      setDinero(dinero * 2)
      setSituacion(2)
    } else if (grados >= 136 && grados <= 179) {
      //sumas 8 monedas y sigues jugando
      setPremio('sumas 8 monedas y sigues jugando')
      setDinero(dinero + 8)
      setTiradas(tiradas + 1)
    } else if (grados >= 225 && grados <= 269) {
      //ganas 5 monedas y sigues jugando
      setPremio('ganas 5 monedas y sigues jugando')
      setDinero(dinero + 5)
      setTiradas(tiradas + 1)
    } else if (grados >= 270 && grados <= 314) {
      //multiplicas x3 y  ganas ___ monedas
      setPremio(`multiplicas x3 y  ganas ${dinero * 3} monedas`)
      setDinero(dinero * 3)
      setSituacion(2)
    } else if (grados >= 315 && grados <= 359) {
      setPremio('ganas 2 monedas y sigues jugando')
      setDinero(dinero + 2)
      setTiradas(tiradas + 1)
    }
  }

  return (
    <div className='container-ruleta'>
      <div className='monedas'>
        {Array.from({ length: dinero }, (_, index) =>
          <img key={index} src="./assets/moneda.png" alt="moneda" />
        )}
      </div>
      <div className='tiradas'>
        {Array.from({ length: tiradas }, (_, index) =>
          <img key={index} src="./assets/ticket.png" alt="ticket" />
        )}
      </div>
      <div className='plafon'>
        <div className='ruleta' style={{
          backgroundImage: `url('./assets/ruleta.png')`,
          transform: `rotate(${rotation}deg`,
          transition: "transform 6s cubic-bezier(0.2,0.8,0.7,0.99)"
        }} onTransitionEnd={final}>

        </div>
        <div className='premio'>
          {premio}
        </div>
        {situacion === 0 &&
          <div className='barra1'>
            <div className='mi_barra' ref={barraRef}></div>
          </div>
        }
        {situacion === 2 && <h1>No te quedan mas tiradas. Has ganado ${dinero} monedas</h1>}
        <div className='barra-inferior'>
          {tiradas > 0 && <button className='lanzar' onClick={lanzar}>Lanzar</button>}
        </div>
        <div className='central'>
          <img src="./assets/central.png" alt="central" />
        </div>

      </div>

    </div>
  )
}

export default App;
