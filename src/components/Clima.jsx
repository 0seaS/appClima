
import axios, { Axios } from "axios"
import { useState, useEffect } from "react"
const Clima = () => {


    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    //let latitude = 0
    //let longitude = 0

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            // console.log("Your current position is:");
            // console.log(`Latitude : ${crd.latitude}`);
            // console.log(`Longitude: ${crd.longitude}`);
            // console.log(`More or less ${crd.accuracy} meters.`);
            
            setLatitude(crd.latitude)
            setLongitude(crd.longitude)
        })
    },[])

    const [allWeather, setAllWeather] = useState({})
    const [weather, setWeather] = useState({})
    const [isCelsius, setIsCelsius] = useState(false)


    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=sp&appid=510f0eaa72c51a328e4614b9e40d2fb5`)
        .then(res => {
            //console.log(res.data.weather[0]?.description)
            setAllWeather(res?.data)
            setWeather(res.data?.weather[0])

        })
        .catch(error => console.log(error));
    },[])

    console.log(allWeather)
    console.log(weather)

    function changeUnits(){
        setIsCelsius(!isCelsius)
    }

    /*`/iconos/${allWeather?.weather[0].icon}.svg`*/
    /*allWeather?.weather[0].description*/
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
                        <span>{allWeather.name}, {allWeather.sys?.country ? allWeather.sys?.country : "Global"}</span>
                        <span>{weather.description /*allWeather.weather[0]?.description*/}</span>
                    </div>
                </div>

                <button className="btn-change-units" onClick={changeUnits}>{isCelsius ? "Cambiar a °F" : "Cambiar a °C"}</button>
            </section>
        </>
    )
}

export default Clima