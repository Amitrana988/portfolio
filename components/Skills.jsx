import SectionWrapper from "./SectionWrapper";
export default function Skills() {
  return (
    <SectionWrapper>
    
     <section
       id="skills"
       className="max-w-7xl mx-auto py-28 px-8"
     >
       <h2 className="text-5xl font-bold mb-14">
         My <span className="text-blue-500">Skills</span>
       </h2>
     
     <div className="grid md:grid-cols-2 gap-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
     
         {[
           { name: "Figma", level: "95%" },
           { name: "UI Design", level: "90%" },
           { name: "UX Research", level: "85%" },
           { name: "Wireframing", level: "90%" },
           { name: "Prototyping", level: "92%" },
           { name: "Adobe Photoshop", level: "88%" },
           { name: "Adobe Illustrator", level: "85%" },
           { name: "Canva", level: "90%" },
         ].map((skill) => (
          <div
       key={skill.name}
       className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-blue-500 hover:scale-[1.02] transition-all duration-300"
     >
         <div className="flex justify-between items-center mb-3">
               <span>{skill.name}</span>
               <span>{skill.level}</span>
             </div>
     
             <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
               <div
                className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                 style={{ width: skill.level }}
               ></div>
             </div>
           </div>
         ))}
     
       </div>
     </section>
     </SectionWrapper>
     
  
    
  );
}