
import axios from "axios"
import { useState, useEffect } from "react"

//const Clima = ({coords}) => {
const Clima = () => {

    // const [latitude, setLatitude] = useState(0)
    // const [longitude, setLongitude] = useState(0)

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((pos) => {
    //         const crd = pos.coords;
    //         setLatitude(crd.latitude)
    //         setLongitude(crd.longitude)
    //     })
    // },[])

    const [coords, setCoords] = useState({latitude:0, longitude:0})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setTimeout(() => {setCoords(pos?.coords)},1000)
            
        })
    }, [])
    


    const [allWeather, setAllWeather] = useState({})
    const [weather, setWeather] = useState({})
    const [isCelsius, setIsCelsius] = useState(true)


    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords?.latitude}&lon=${coords?.longitude}&lang=sp&appid=510f0eaa72c51a328e4614b9e40d2fb5`)
        .then(res => {
            //console.log(res.data.weather[0]?.description)
            setAllWeather(res?.data)
            setWeather(res.data?.weather[0])
        })
        .catch(error => console.log(error));
    },[coords])

    function changeUnits(){
        setIsCelsius(!isCelsius)
    }

    return(
        <>
            <section>
                <div className="weather-card">
                    <div className="card-head"><span>{isCelsius ? Math.round(allWeather.main?.temp - 273.15) : Math.round(allWeather.main?.temp)}°</span><img src={`/iconos/${weather?.icon}.svg`} alt="" /></div>
                    <div className="card-body">
                        <ul>
                            <li>Viento: {allWeather.wind?.speed} m/s</li>
                            <li>Nuves: {allWeather.clouds?.all}%</li>
                            <li>Precion: {allWeather.main?.pressure} hPa</li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <span className="city">{allWeather.name}, {allWeather.sys?.country ? allWeather.sys?.country : "Global"}</span>
                        <span>{weather.description /*allWeather.weather[0]?.description*/}</span>
                    </div>
                </div>

                <button className="btn-change-units" onClick={changeUnits}>{isCelsius ? "Cambiar a °F" : "Cambiar a °C"}</button>
            </section>
        </>
    )
}

export default Clima