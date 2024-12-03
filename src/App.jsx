import { useState } from 'react';
import './App.css'
import { FiMenu } from "react-icons/fi";

function App() {
   
  const [open, setOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setOpen(!open)
  }

  return (
    <>
       <section className='main-section'>
        <div className="inside-div">
          <nav className='navbar'>
             <div className="logo-div">
                <a href="" className='zee'>Zee</a>
             </div>

             <div className="links">
               <a href="" className='home'>Home</a>
               <a href="" className='others'>About</a>
               <a href="" className='others'>Skills</a>
               <a href="" className='others'>Projects</a>
               <a href="" className='others'>Contact Me</a>
              <div className="menu-div">
              <a href="" className="menu" onClick={toggleMenu}> <FiMenu/></a>
              <div className="optionsdiv">
                <ul className={`vanish${open ? 'open' : ''}`}>
                  <li><a href="" className='black-links'>Home</a></li>
                  <li><a href="" className='black-links'>About</a></li>
                  <li><a href="" className='black-links'>Skills</a></li>
                  <li><a href="" className='black-links'>Projects</a></li>
                  <li><a href="" className='black-links'>Contact Me</a></li>
                </ul>
              </div>
              </div>
             </div>
          </nav>

          <div className="introdiv">
            <p className='hello'>Hello !!!</p>
            <p className='name'>Im Zion Omogbeme</p>
            <p className='role'>An Aspriring Data Scientist</p>
          </div>
        </div>
       </section>
    </>
  )
}

export default App
