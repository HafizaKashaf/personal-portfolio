'use client';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    { name: 'John Doe', feedback: 'An outstanding developer! Delivered the project beyond expectations.', rating: 5 },
    { name: 'Jane Smith', feedback: 'Professional, efficient, and highly skilled. Highly recommended!', rating: 4 },
    { name: 'Michael Lee', feedback: 'Great attention to detail and excellent communication throughout.', rating: 5 },
    { name: 'Emily Davis', feedback: 'A pleasure to work with! The project was completed flawlessly.', rating: 4 },
    { name: 'David Brown', feedback: 'Impressive technical skills and problem-solving ability.', rating: 5 },
    { name: 'Sarah Wilson', feedback: 'Reliable, fast, and creative! Couldn’t ask for a better developer.', rating: 4 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className=" flex flex-col items-center justify-center p-10 text-white">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-6xl font-extrabold text-yellow-400 mb-6 uppercase tracking-wide">Testimonials</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Hear from those who have worked with me and their experiences.
        </p>

        {/* Testimonial Display */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl text-center border border-gray-700 max-w-3xl mx-auto relative flex items-center">
          <button onClick={prevTestimonial} className="absolute left-4 bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition">
            <FaChevronLeft className="text-black w-6 h-6" />
          </button>
          <div className="flex-1">
          <p className="text-gray-300 italic">
  &quot;{testimonials[currentIndex].feedback}&quot;
</p>

            <h2 className="text-yellow-400 text-xl mt-4">- {testimonials[currentIndex].name}</h2>
            <div className="flex justify-center mt-2">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-5 h-5" />
              ))}
            </div>
          </div>
          <button onClick={nextTestimonial} className="absolute right-4 bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition">
            <FaChevronRight className="text-black w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
