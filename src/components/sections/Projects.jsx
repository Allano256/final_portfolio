import { RevealOnScroll } from "../RevealOnScroll"

export const Projects =()=>{
    return <section  id="projects" className="min-h-screen flex items-center justify-center py-20" >
        <RevealOnScroll>

        <div  className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to cyan-400 bg-clip-text text-transparent text-center" >
        My projects
        </h2>

        <div  className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Restaurant application */}
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all " >
                <h3 className="text-xl font-bold mb-2">Booking Application</h3>
            
            <p className="text-gray-400 mb-4"> A restaurant booking application that allows customers make reservations at the restaurant.</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {["Django","Python", "Postgres", "Django Rest Framework API"].map((skill, key)=>(
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" >
                         {skill}
                    </span>
                ))}
            </div>

            <div className="flex justify-between items-center">
                <a href="https://github.com/Allano256/restaurant_app" className="text-blue-400 hover:text-blue-300 transition-color">View Project  </a>
            </div>

         </div>


         {/* Restaurant application */}
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all " >
                <h3 className="text-xl font-bold mb-2">Foodshare Application</h3>
            
            <p className="text-gray-400 mb-4"> An application that helps people/companies share surplus food..</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {["React","Javascript","TailwindCSS","HTML"].map((skill, key)=>(
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" >
                         {skill}
                    </span>
                ))}
            </div>

            <div className="flex justify-between items-center">
                <a href="https://foodshareconect.netlify.app/" className="text-blue-400 hover:text-blue-300 transition-color">View Project  </a>
            </div>

         </div>

            {/* BMI calculator */}
         <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all " >
                <h3 className="text-xl font-bold mb-2">BMI Calculator</h3>
            
            <p className="text-gray-400 mb-4"> A simple calculator that measures one's body mass index to help help manage their weight by keeping track. </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {["React","Javascript","CSS","HTML"].map((skill, key)=>(
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" >
                         {skill}
                    </span>
                ))}
            </div>

            <div className="flex justify-between items-center">
                <a href="https://yourbmichecker.netlify.app/" className="text-blue-400 hover:text-blue-300 transition-color">View Project  </a>
            </div>

         </div>



        </div>
        </div>
        
        </RevealOnScroll>
    </section>
}