'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="min-h-screen  flex flex-col items-center justify-center p-10 text-white">
      <div className="max-w-6xl w-full bg-gray-900 shadow-2xl rounded-2xl p-12 text-white flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/images/about.png" // Replace with an illustration or relevant image
            alt="Coding Illustration"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg border-4 border-gray-700"
          />
        </div>
        
        {/* About Content */}
        <div className="w-full md:w-2/3 text-left">
          <h1 className="text-5xl font-extrabold text-red-400">About Me</h1>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            I am Kashaf Noor, a professional full-stack developer with a deep passion for building elegant, high-performance web applications. Specializing in modern technologies like Next.js, Tailwind CSS, and backend development, I bring a unique blend of technical skills and creative problem-solving to every project.
          </p>
          
          {/* Skills Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-red-400">Technical Expertise</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'TypeScript', 'MongoDB', 'GraphQL', 'Docker', 'AWS'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-gray-700 text-white rounded-full text-sm font-medium shadow-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="mt-8">
            <p className="text-gray-300 text-lg">Let's connect and create something amazing!</p>
            <a
              href="mailto:kashafnoor@example.com"
              className="mt-4 inline-block bg-red-400 text-gray-900 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-red-500 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
