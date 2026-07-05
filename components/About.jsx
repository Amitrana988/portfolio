import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

export default function About() {
  return (
  
       <SectionWrapper>
 <section
  id="about"
  className="max-w-7xl mx-auto py-32 px-8"
>
  <h2 className="text-5xl font-bold mb-10">
    About <span className="text-blue-500">Me</span>
  </h2>

  <div className="grid md:grid-cols-2 gap-16 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

   <Image
  src="/images/amit.png"
  alt="Amit Rana"
  width={500}
  height={500}
  className="rounded-3xl border border-white/10 shadow-2xl hover:scale-105 transition-all duration-500"
/>
    <div>

     <h3 className="text-4xl font-bold mb-6">
        UI/UX Designer & Graphic Designer
      </h3>

      <p className="text-gray-300 leading-8 text-lg">
        I am Amit Rana, a passionate UI/UX Designer and Graphic Designer
        dedicated to crafting clean, modern and user-friendly digital
        experiences. I specialize in creating intuitive interfaces, wireframes,
        interactive prototypes, branding, and visual designs that combine
        creativity with usability.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-10">

        <div>
          <p className="text-gray-500">Name</p>
          <p className="font-semibold">Amit Rana</p>
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          <p className="font-semibold">amitranakhaddar@gmail.com</p>
        </div>

        <div>
          <p className="text-gray-500">Phone</p>
          <p className="font-semibold">8580678039</p>
        </div>

        <div>
          <p className="text-gray-500">Location</p>
          <p className="font-semibold">India</p>
        </div>

      </div>

    </div>

  </div>
</section>
</SectionWrapper>

  
  );
}