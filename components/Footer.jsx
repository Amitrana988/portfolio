export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-white/5 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              Amit<span className="text-blue-500">.</span>
            </h2>

            <p className="text-gray-400 mt-3">
              UI/UX Designer & Graphic Designer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition"
            >
              Behance
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400">
            © 2026 Amit Rana. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="mt-4 md:mt-0 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
          >
            ↑ Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}