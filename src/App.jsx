
import Loader from './components/Loader';
import Clima from './components/Clima';
import Header from './components/Header';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  
  //const [coords, setCoords] = useState({latitude:0, longitude:0})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    //  navigator.geolocation.getCurrentPosition((pos) => {
    //   setCoords(pos?.coords) 
    // })
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading])

  return (
    <>
      {isLoading && <Loader />}
      <Header></Header>
      
      <Clima /*coords={coords}*/></Clima>
    </>
  )
}

export default App
