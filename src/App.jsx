
import Loader from './components/Loader';
import Clima from './components/Clima'
import './App.css'
import { useEffect, useState } from 'react';

function App() {

  // const coord = []
  // const options = {
  //   enableHighAccuracy: false,
  //   timeout: 100,
  //   maximumAge: Infinity
  // };
  
  // function success(pos) {
  //   coord.push(pos.coords) 
  
  //   console.log('Tu ubicación actual es:');
  //   console.log(`Latitud : ${coord[0].latitude}`);
  //   console.log(`Longitud: ${coord[0].longitude}`);
  //   console.log(`Más o menos ${coord[0].accuracy} metros.`);
  //   console.log(coord[0])
  // }
  
  // function error(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }
  
  // navigator.geolocation.getCurrentPosition(success, error, options);
  
  // let coord
  // setTimeout(() => {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     //const [coords, setCoords] = useState({latitude:0, longitude:0})
  //     coord = pos.coords
  //     })
  // }, 5000);
  
  const [coords, setCoords] = useState({latitude:0, longitude:0})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
     navigator.geolocation.getCurrentPosition((pos) => {
      setCoords(pos?.coords)
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    })
  }, [])

  return (
    <>
      {isLoading && <Loader />}
      <header>
        <nav>
          <ul>
            <li>Weather app</li>
            <li><button><i className='bx bx-search-alt-2'></i></button><input type="text" placeholder='Busca una ciudad'/></li>
            <li>
              <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
              </label>
            </li>
          </ul>
        </nav>
      </header>
      <Clima coords={coords}></Clima>
    </>
  )
}

export default App
