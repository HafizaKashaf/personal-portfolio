'use client';

import Image from 'next/image';

export default function Services() {
  return (
    <section className="min-h-screen  flex flex-col items-center justify-center p-10 text-white">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-6xl font-extrabold text-yellow-400 mb-6 uppercase tracking-wide">My Services</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Offering expert full-stack development and innovative digital solutions to elevate your business.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'Full-Stack Development', desc: 'End-to-end web solutions using modern frameworks like Next.js, React, and Node.js.', img: '/images/icon1.png' },
            { title: 'Custom Web Applications', desc: 'Building scalable, high-performance apps tailored to your business needs.', img: '/images/icon2.png' },
            { title: 'Backend Development', desc: 'Developing robust APIs and databases with Node.js, Express, and MongoDB.', img: '/images/icon3.png' },
            { title: 'Frontend Development', desc: 'Crafting interactive, responsive UI with React, Tailwind CSS, and TypeScript.', img: '/images/icon4.png' },
            { title: 'Performance Optimization', desc: 'Enhancing website speed, SEO, and accessibility for optimal user experience.', img: '/images/icon6.png' },
            { title: 'Cloud & DevOps', desc: 'Deploying secure and scalable solutions using AWS, Docker, and CI/CD pipelines.', img: '/images/icon5.png' }
          ].map((service, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col items-center text-center border border-gray-700">
              <div className="w-24 h-24 flex items-center justify-center bg-gray-800 rounded-full mb-4 shadow-lg">
                <Image src={service.img} alt={service.title} width={60} height={60} />
              </div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-2">{service.title}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{service.desc}</p>
              <button className='bg-red-700 text-white font-normal hover:bg-red-900 px-4 py-2 mt-2 rounded-lg '>
                Read Me
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
