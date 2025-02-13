'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center p-10 text-white">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-6xl font-extrabold text-yellow-400 mb-6 uppercase tracking-wide">My Projects</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          A showcase of my latest and most impactful projects, crafted with precision and expertise.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: 'E-Commerce Website', desc: 'A full-featured e-commerce platform with secure payments and a seamless UI.', img: '/images/p1.jpg', link: 'https://mileston-3-one.vercel.app/' },
            { title: 'Blog CMS', desc: 'A dynamic and intuitive content management system, post creation,  and categorization for blogging.', img: '/images/p2.jpg', link: 'https://assignment-eight-blog-website.vercel.app/' },
            { title: 'Admin Dashboard', desc: 'A powerful admin dashboard for managing users, orders, and analytics.', img: '/images/p5.jpg', link: 'https://admin-dashbord-flax.vercel.app/' },
            { title: 'Figma Website', desc: 'A beautifully designed website based on Figma UI principles.', img: '/images/p4.jpg', link: 'https://website-css-two.vercel.app/' },
            { title: 'Q-Commerce Platform', desc: 'A fast and efficient quick commerce solution for instant deliveries.', img: '/images/p3.jpg', link: 'https://hackathon-ecommerce-hqy1.vercel.app/' },
            { title: 'CV Maker', desc: 'An interactive tool to create professional resumes effortlessly.', img:'/images/p2.jpg', link: 'https://milestone4-six-red.vercel.app/' }
          ].map((project, index) => (
            <Link key={index} href={project.link}>
              <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col items-center text-center border border-gray-700 cursor-pointer">
                <Image src={project.img} alt={project.title} width={300} height={200} className="rounded-lg mb-4" />
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">{project.title}</h2>
                <p className="text-gray-300 text-lg leading-relaxed">{project.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}