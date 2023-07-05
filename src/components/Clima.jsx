
import axios, { Axios } from "axios"
import { useState, useEffect } from "react"
const Clima = () => {

    let latitude = 0
    let longitude = 0

    navigator.geolocation.getCurrentPosition((pos) => {
        const crd = pos.coords;
        // console.log("Your current position is:");
        // console.log(`Latitude : ${crd.latitude}`);
        // console.log(`Longitude: ${crd.longitude}`);
        // console.log(`More or less ${crd.accuracy} meters.`);

        latitude = crd.latitude
        longitude = crd.longitude
    })

    const [weather, setWeather]= useState({})

    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=sp&appid=510f0eaa72c51a328e4614b9e40d2fb5`)
        .then(res => {
            //console.log(res.data.weather[0]?.description)
            setWeather(res.data.weather[0])
        })
        .catch(error => console.log(error));
    },[])

    console.log(weather)

    return(
        <>
            <section>
                <div className="weather-card">
                    <div className="card-head"><span>35°</span><img src="/iconos/01n.svg" alt="" /></div>
                    <div className="card-body">
                        <ul>
                            <li>Viento</li>
                            <li>Nuves</li>
                            <li>Precion</li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <span>Ubicacion, Ciudad</span>
                        <span>{weather.description}</span>
                    </div>
                </div>

                <button className="btn-change-units">cambiar a F</button>
            </section>
        </>
    )
}

export default Clima