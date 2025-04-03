import { useEffect } from "react"

export const Navbar =({menuOpen, setMenuOpen})=>{

    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden" : ""
    },[menuOpen]);

    
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg" >
            <div className="max-w-5xl mx-auto px-4" >
                <div className="fleex justify-between items-center h-16" >
                  <a href="#home" className="font-mono text-xl font-bold text-white"
                   >AllanoTech</a>
                   {/* {mobile menue} */}
                   <div  className="w-7 h-5 relative cursor-pointer z-40 md:hidden"  onClick={()=> setMenuOpen((prev)=> !prev)} >
                     &#9776;
                   </div>
                     {/* desktop menue */}
                     <div  className="hidden md:flex items-center space-x-8" >
                      <a className="text-gray-300 hover:text-white transition-colors" href="#home">Home</a>
                      <a className="text-gray-300 hover:text-white transition-colors" href="#about">About</a>
                      
                      <a className="text-gray-300 hover:text-white transition-colors" href="#projects">Projects</a>
                      <a className="text-gray-300 hover:text-white transition-colors" href="#contact">Contact</a>

                     </div>

                </div>

            </div>

        </nav>
    )
}