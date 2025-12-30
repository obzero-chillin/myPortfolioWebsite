import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Logo from './assets/Logo.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage'
import References from './components/references'
import About from './components/about'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Router>
      <header id="myHeader">
        <div id='headerCont'>
          <img src={Logo} id="logo"></img>
          <div id='navCont'>
            <nav>
              <ul>

                  <li>
                    <Link to='/about'>
                      About
                    </Link>
                  </li>
                
                
                
                <li>
                    <Link to="/#projects" >
                      Projects
                    </Link>
                  </li>
                
                
              
                <li>
                    <Link to='/#skills'>
                      Skills
                    </Link>
                  </li>
                
                
              
                <li>
                    <Link to='/references'>
                      References
                    </Link>
                  </li>
                
                
              
                <li>
                    <Link to='github.com'>
                      Github
                    </Link>
                  </li>
                
                
              </ul>
            </nav>

          </div>
          
        </div>
      </header>
      <Routes>
        <Route path='/' element={
          <HomePage />
          
        } >     
          
        
        </Route>
        <Route path='/references' element={<References />}>
        </Route>

        <Route path='/about' element={<About />}>
        </Route>

       
        
      </Routes>

      </Router>
      
    </>
  )
}

export default App
