import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Multi-Service",
    image: "/images/project1.png",
    description:
      "A modern tech ecosystem landing page with integrated authentication, dynamic search, and seamless widget navigation.",
  },
  {
    title: "E-Commerce App",
    image: "/images/project2.png",
    description:
      "Premium shopping app with intuitive navigation and attractive product layouts.",
  },
  {
    title: "Travel App",
    image: "/images/project3.png",
    description:
      "Travel booking app designed with simple, engaging and user-friendly screens.",
  },
  {
    title: "Healthcare App",
    image: "/images/project4.png",
    description:
      "Healthcare platform focused on appointments, medical records and usability.",
  },
  {
    title: "Banking Dashboard",
    image: "/images/project5.png",
    description:
      "Financial dashboard with analytics, transactions and clean visual hierarchy.",
  },
  {
    title: "Fitness App",
    image: "/images/project6.png",
    description:
      "Fitness tracking app with workout plans, progress charts and modern interface.",
  },
];

export default function Projects() {
  return (
    <SectionWrapper>
      <section
        id="projects"
        className="max-w-7xl mx-auto py-28 px-8"
      >
        <h2 className="text-5xl font-bold text-center mb-14">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500 hover:-translate-y-3 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-7 text-sm">
                  {project.description}
                </p>

                <button className="mt-6 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-semibold text-sm">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}