
import Loader from './components/Loader';
import Clima from './components/Clima';
import Header from './components/Header';
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
  }, [isLoading])

  return (
    <>
      {isLoading && <Loader />}
      <Header></Header>
      
      <Clima coords={coords}></Clima>
    </>
  )
}

export default App
