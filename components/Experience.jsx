import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper>
      <section
        id="experience"
        className="max-w-7xl mx-auto py-28 px-8"
      >
        <h2 className="text-5xl font-bold text-center mb-14">
          My <span className="text-blue-500">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-2">
              UI/UX Designer
            </h3>
            <p className="text-gray-400">
              Designed user interfaces, wireframes and prototypes for modern web and mobile apps.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-2">
              Graphic Designer
            </h3>
            <p className="text-gray-400">
              Created branding, social media creatives, posters and marketing visuals.
            </p>
          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}