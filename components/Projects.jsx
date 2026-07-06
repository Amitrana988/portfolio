import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Multi-Service Platform",
    image: "/images/project1.png",
    description:
      "A modern multi-service platform designed with seamless navigation, intuitive user experience, and responsive interface.",
      figmaLink:
    "https://www.figma.com/proto/2RR5HhVugA3ZlVJHMUuqsy/Amit-rana?node-id=2-2",
  },
{
  title: "E-Commerce Website",
  image: "/images/project2.png",
  description:
    "A modern multi-service platform designed with seamless navigation, intuitive user experience, and responsive interface.",
  figmaLink:
    "https://www.figma.com/proto/Tr5s7v6yfXHtYY45Yu2ykh/Ecommerce-Website-Design--Community-?node-id=104-2",
},
  {
    title: "3D Landing Page Design",
    image: "/images/project3.png",
    description:
      "A creative landing page with modern 3D visuals, engaging layouts, and an interactive user experience designed in Figma.",
      figmaLink:
    "https://www.figma.com/proto/KsfpeaTb5aAKCSFp6hJOZ1/Amit-rana?node-id=2-2",
  },
  {
    title: "Authentication UI",
    image: "/images/project4.png",
    description:
      "A clean and responsive sign up and login interface focused on usability, accessibility, and smooth user onboarding.",
        figmaLink:
    "https://www.figma.com/proto/FEdlAJKUd2haW1TeShdLbk/Amit-rana?node-id=1-2",
  },
  {
    title: "Brand Logo Collection",
    image: "/images/project5.png",
    description:
      "A collection of modern logo designs created with a strong focus on branding, creativity, and visual identity.",
        figmaLink:
    "https://www.figma.com/proto/3BkX1Y192uWWPuLVV6sagT/Amit?node-id=1016-3",
  },
  {
    title: "Marketing Banner Design",
    image: "/images/project6.png",
    description:
      "A promotional banner designed with bold typography, balanced layouts, and eye-catching visuals for marketing campaigns.",
        figmaLink:
    "https://www.figma.com/proto/9EFrJIsxIfx4haxDshy1uQ/Amit-Project?node-id=28-2",
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

    <a
  href={project.figmaLink}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-semibold text-sm"
>
  View
</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}