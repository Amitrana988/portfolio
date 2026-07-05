import SectionWrapper from "./SectionWrapper";

export default function Services() {
  return (
    <SectionWrapper>
      <section
        id="services"
        className="max-w-7xl mx-auto py-28 px-8"
      >
        <h2 className="text-5xl font-bold text-center mb-14">
          My <span className="text-blue-500">Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-500 hover:-translate-y-3 transition-all duration-500">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-2xl font-semibold mb-3">UI Design</h3>
            <p className="text-gray-400 leading-7">
              Clean, modern and visually appealing user interfaces for websites and mobile applications.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-500 hover:-translate-y-3 transition-all duration-500">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-3">UX Research</h3>
            <p className="text-gray-400 leading-7">
              User research, journey mapping, wireframes and usability-focused design solutions.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-500 hover:-translate-y-3 transition-all duration-500">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-2xl font-semibold mb-3">Prototyping</h3>
            <p className="text-gray-400 leading-7">
              Interactive prototypes in Figma for testing ideas before development.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-500 hover:-translate-y-3 transition-all duration-500">
            <div className="text-3xl mb-4">🖌️</div>
            <h3 className="text-2xl font-semibold mb-3">Graphic Design</h3>
            <p className="text-gray-400 leading-7">
              Social media creatives, branding, posters, banners and marketing materials.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-500 hover:-translate-y-3 transition-all duration-500">
            <div className="text-3xl mb-4">💻</div>
            <h3 className="text-2xl font-semibold mb-3">Responsive Design</h3>
            <p className="text-gray-400 leading-7">
              Mobile-first responsive layouts that work perfectly on all devices.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-500 hover:-translate-y-3 transition-all duration-500">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold mb-3">Brand Identity</h3>
            <p className="text-gray-400 leading-7">
              Logo design, typography, color systems and complete brand identity for businesses.
            </p>
          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}