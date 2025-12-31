import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Logo from './assets/Logo.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage'
import References from './components/references'
import About from './components/about'
import Contact from './components/contact'
import { RiMenu5Fill } from "react-icons/ri";
import ScrollManager from './ScrollManager'





function App() {
  const [open, setOpen] = useState(false)
   useEffect(() => {
    const bgimg = document.querySelector('#backgroundImg');
    if (!bgimg) return;

    const animStart = 0;
    const animEnd = window.innerHeight;

    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      let opacity = 1 - (scrollTop - animStart) / (animEnd - animStart);
      opacity = Math.min(Math.max(opacity, 0), 1);
      bgimg.style.opacity = opacity;
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  


  function toggleNav(){
    document.querySelector('#navCont').classList.remove('open')


  }

  

  
  return (
    <>


      <Router>
      <ScrollManager />
      <header id="myHeader">
        <div id='headerCont'>
          <div id='navsec1'>
            <RiMenu5Fill size={30} color='white' id='burger' role='button' onClick={()=>{
               document.querySelector('#navCont').classList.toggle('open')
            }}/>
            <Link to='/'>
          
          <img src={Logo} id="logo" onClick={()=>{
              toggleNav()
            }}></img>
          
          </Link>
            
          </div>
          
          <div id='navCont'>
            <nav>
              <ul id='navul' >

                  <li className='navli' onClick={()=>{toggleNav()}}>
                    <Link to='/about'>
                      About
                    </Link>
                  </li>
                
                
                
                <li className='navli' onClick={()=>{toggleNav()}}>
                    <Link to="/#projects" >
                      Projects
                    </Link>
                  </li>
                
                
              
                <li className='navli' onClick={()=>{toggleNav()}}>
                    <Link to='/#skills'>
                      Skills
                    </Link>
                  </li>
                
                
              
                <li className='navli' onClick={()=>{toggleNav()}}>
                    <Link to='/references'>
                      References
                    </Link>
                  </li>
                
                
              
                <li className='navli' onClick={()=>{toggleNav()}}>
                      <a href='https://github.com/obzero-chillin' target='_blank'>Github</a>
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

        <Route path='/contact' element={<Contact />}>
        </Route>

       
        
      </Routes>

      </Router>

      <footer></footer>
      <hr id="footerHr"></hr>
      <h6>Designed by aom</h6>
      <h6><em><a className='footera' href='/contact'>Contact</a></em></h6>
      <h6><em><a className='footera'>Github</a></em></h6>
      <h6><em><a className='footera'>Instagram</a></em></h6>

      

    </>
  )
}

export default App
