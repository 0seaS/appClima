

const Loader = () => {

    return(
        <>
        <div>CARGANDO</div>
        <div className="loader"> 
            <div className="loader-image"><img src="/iconos/04n.svg" alt="" /></div>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        </>
    )
}

export default Loader