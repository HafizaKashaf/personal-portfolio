"use client";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center p-10 text-white">
      <div className="max-w-3xl w-full bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h1 className="text-5xl font-bold text-yellow-400 mb-6 uppercase text-center">Contact Me</h1>
        <p className="text-gray-300 text-lg text-center mb-8">
          Have a question or want to work together? Drop me a message!
        </p>
        <form className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold p-4 rounded-md hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
