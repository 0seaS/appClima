import { useState,useEffect } from "react";

const Header = () => {

    const [isDark, setIsDark] = useState(false)

    const darckMode = () => {
        
        if (isDark) {
            document.body.style = `background:radial-gradient(#53388f, #sf2958)`;
        } else {
            
            
        }
        setIsDark(!isDark)
    }

    return(
        <>
            <header>
                <nav>
                <ul>
                    <li>Weather app</li>
                    <li><button className="search"><i className='bx bx-search-alt-2'></i></button><input type="text" placeholder='Busca una ciudad'/></li>
                    <li>
                        {/*<button onClick={darckMode}>*/}
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label> 
                        {/*</button>*/}
                                              
                    </li>
                </ul>
                </nav>
            </header>
        </>
    )
}
export default Header