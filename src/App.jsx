import Clima from './components/Clima'
import './App.css'

function App() {


  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Weather app</li>
            <li><button><i class='bx bx-search-alt-2'></i></button><input type="text" /></li>
            <li>
              <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
              </label>
            </li>
          </ul>
        </nav>
      </header>
      <Clima></Clima>
      
      
    </>
  )
}

export default App
