
const Header = () => {

    return(
        <>
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
        </>
    )
}
export default Header