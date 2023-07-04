
const Clima = () => {

    

    return(
        <>
            <section>
                <div className="weather-card">
                    <div className="card-head"><span>35°</span><img src="/iconos/1.svg" alt="" /></div>
                    <div className="card-body">
                        <ul>
                            <li>Viento</li>
                            <li>Nuves</li>
                            <li>Precion</li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <span>Ubicacion, Ciudad</span>
                        <span>Parcialmente Nublado</span>
                    </div>
                </div>

                <button>cambiar a F</button>
            </section>
        </>
    )
}

export default Clima