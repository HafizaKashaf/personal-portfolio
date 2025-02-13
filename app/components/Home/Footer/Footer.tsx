"use client";

export default function Footer() {
  return (
    <section className="flex items-center justify-center py-10 text-white">
      <div className="w-full  px-10 rounded-2xl  text-center  border-gray-800">
        {/* Footer Title */}
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-6 uppercase tracking-wide">Let&apos;s Connect
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Feel free to reach out for collaborations, projects, or just to say hello!
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 text-lg font-medium mb-8">
          <a href="/about" className="text-gray-300 hover:text-yellow-400 transition">About</a>
          <a href="/projects" className="text-gray-300 hover:text-yellow-400 transition">Projects</a>
          <a href="/contact" className="text-gray-300 hover:text-yellow-400 transition">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/yourprofile" target="_blank" className="text-gray-300 hover:text-yellow-400 transition text-xl">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-gray-300 hover:text-yellow-400 transition text-xl">LinkedIn</a>
          <a href="https://twitter.com/yourprofile" target="_blank" className="text-gray-300 hover:text-yellow-400 transition text-xl">Twitter</a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </section>
  );
}
