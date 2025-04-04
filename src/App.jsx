
import { useState } from 'react';
import "./App.css"
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import { Navbar } from './components/Navabar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';

function App() {
 const [isLoaded, setIsLoaded]= useState(false);
 const [menuOpen, setMenuOpen]= useState(false);


  return (
    <>
    {!isLoaded && <LoadingScreen  onComplete={()=> setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100": "opacity-9"} bg-black text-gray-100 `} >

        <Navbar menueOpen={menuOpen} setMenuOpen={setMenuOpen} />

       <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
       <Home />
       <About />
       <Projects />
      </div>
      
      </>
   
      
  )
}

export default App
