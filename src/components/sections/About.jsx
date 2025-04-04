export const About = ()=>{
    const frontendSkills =["React","TailwindCSS","Bootstrap","Javascript","HTML","CSS"]
    const backendSkills =["Django","Python","Databases-Postgres","Django Rest Framework API"]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20"  >
        <div className="max-w-3xl mx-auto px-4" >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to cyan-400 bg-clip-text text-transparent text-center" ></h2>
            <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all" >
                <p className="text-gray-300 mb-6">
                    I'm a passionate full-stack developer with a strong background in building dynamic and responsive web applications. I have a keen eye for detail and a commitment to delivering high-quality code. My expertise lies in both front-end and back-end development, allowing me to create seamless user experiences and robust server-side functionality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"  >
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all" >
                        <h3 className="text-xl font-bold mb-4" >Frontend</h3>
                        <div className="flex flex-wrap gap-2" >
                            {frontendSkills.map((skill, key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0?2px?8px?rgba(59,130,2246,0.2)] transition" >
                                     {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all" >
                        <h3 className="text-xl font-bold mb-4" >Backend</h3>
                        <div className="flex flex-wrap gap-2" >
                            {backendSkills.map((skill, key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0?2px?8px?rgba(59,130,2246,0.2)] transition" >
                                     {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div  className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8" >
                <div className="p-6 rounded-xl border-white/10 border hover:-transition-translate-y-1 transition-all" >
                     <h3  className="text-xl font-bold mb-4 ">🎓Education </h3>
                     <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Diploma Full Stack Software Development - Code Institute 2024</strong>
                        </li>
                        <li>
                            <strong>Relevenat Coursework: Databases, Data Structures, Rest API, Web Development </strong>
                        </li>
                     </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-transition-translate-y-1 transition-all" >
                     <h3  className="text-xl font-bold mb-4 ">🧑‍💻Work Experience </h3>
                     <div  className="space-y-4 textgray-300">
                           <div>
                            <h4  className="font-semibold">Software Developer at NOQ-SWEDEN (January 2025 - Present)-Intern</h4>
                            <p>Developed SSE-Server Sent Events to enable real time updates of bookings on the backend, changing the User Interface(UI) on the Frontend to improve user experience (UX)</p>
                           </div>
                     </div>
                </div>

            </div>

        </div>
    </section>
}