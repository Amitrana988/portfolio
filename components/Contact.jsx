export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto py-28 px-8"
    >
      <h2 className="text-5xl font-bold text-center mb-14">
        Contact <span className="text-blue-500">Me</span>
      </h2>

      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 text-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 text-white"
          />

        </div>

        <input
          type="text"
          placeholder="Subject"
          className="w-full mt-6 bg-transparent border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 text-white"
        />

        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full mt-6 bg-transparent border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 resize-none text-white"
        ></textarea>

        <button
          className="mt-8 w-full bg-blue-600 hover:bg-blue-500 transition py-4 rounded-xl font-semibold text-white"
        >
          Send Message
        </button>

      </div>
    </section>
  );
}